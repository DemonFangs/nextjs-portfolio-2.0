import Highlight from "./Highlight";

/**
 * @callback replaceWith
 * @param {string} key The unique identifier for the DOM element
 * @param {string} text The text to decorate and wrap
 * @returns {JSX.Element} Returns a custom wrapper representing the
 * matched decoration.
 */

/**
 * @typedef DecorationPattern
 * @property {string|RegExp} to_match The string to match to apply the
 * wrapper
 * @property {replaceWith} replaceWith The function that wraps and decorates
 * the passed text 
 */

/**
 * @typedef DecorationPatterns
 * @property {DecorationPattern} HIGHLIGHT For wrapping matched text inside a custom
 * Highlight component.
 * @property {DecorationPattern} BOLD For wrapping matched text inside a bold tag.
 * @property {DecorationPattern} CODE For wrapping matched text inside a code tag.
 * @property {DecorationPattern} INLINE_LINK For wrapping matched text inside a custom 
 * anchor tag.
 * @property {DecorationPattern} DEPRECATED For wrapping matched text inside a custom span
 * tag.
 * @property {DecorationPattern} TOOLTIP For wrapping matched text inside a custom 
 * abbreviation and definition tag.
 */

const DEFINITIONS_FOR_ABBREVIATIONS = {
  SSP: [
    'Supply-Side Platform (SSP) allows publishers to manage their ad inventory and',
    'enables buyers to bid on and purchase ad slots for serving their ads.'
  ].join(' '),
  bidders: [
    'Bidders are buyers (demand-side platforms or SSPs) that compete in real-time',
    'auctions to purchase ad slots and serve their ads.'
  ],
  'Ads.txt': [
    'Ads.txt is a file that lists authorized sellers (SSPs and ad networks)',
    'approved by the publisher to sell their ad inventory, designating them',
    'as direct partners or resellers.'
  ],
  IAB: [
    'Interactive Advertising Bureau (IAB) is an industry organization that',
    'establishes technical standards, guidelines, and best practices to ensure',
    'consistency and transparency across the digital advertising ecosystem.'
  ],
};

/** @type {DecorationPatterns} */
const DECORATION_PATTERNS = {
  HIGHLIGHT: {
    to_match: /("[^"]+")/,
    replaceWith: (key, text) => {
      return (
        <Highlight key={key} text={text.replace(/"/g, '')} />
      );
    }
  },
  BOLD: {
    to_match: /(\*\*[^\*]+\*\*)/,
    replaceWith: (key, text) => {
      return (
        <b key={key}>{text.replace(/\*/g, '')}</b>
      );
    }
  },
  CODE: {
    to_match: /(`[^`]+`)/,
    replaceWith: (key, text) => {
      return (
        <code key={key}>{text.replace(/`/g, '')}</code>
      );
    }
  },
  INLINE_LINK: {
    to_match: /(\[[^\]]+\]\([^\)]+\))/,
    replaceWith: (key, text) => {
      const [content, link] = sanitizeAfterMatch(text, /\[|\)/, '](');
      return (
        <a
          key={key} 
          className="inline-link"
          href={link}
          title={`Go to ${content}`}
        >{content}</a>
      );
    }
  },
  DEPRECATED: {
    to_match: /(\[\[deprecated\]\])/i,
    replaceWith: (key) => {
      return (
        <span 
          key={key} 
          className="deprecated-inline"
        >deprecated</span>
      );
    }
  },
  TOOLTIP: {
    to_match: /(::[^:]+::)/,
    replaceWith: (key, text) => {
      const abbreviation = text.replace(/:/g, '');
      return (
        <dfn key={key}>
          <abbr title={DEFINITIONS_FOR_ABBREVIATIONS[abbreviation]}>
            {abbreviation}
          </abbr>
        </dfn>
      );
    }
  },
};

function splitByMatchedText(text_to_match) {
  if (!text_to_match) {
    return text_to_match;
  }

  return Object.values(DECORATION_PATTERNS)
    .map(patterns => patterns.to_match)
    .reduce((matched_texts, regex) => {
      return matched_texts
        .map(text => text.split(regex))
        .flat();
    }, [text_to_match]);
}

function sanitizeAfterMatch(text, clean, split_by) {
  const clean_regexp = new RegExp(clean, 'g');
  return text.replace(clean_regexp, '').split(split_by);
}

/**
 * Validates whether the passed text is a valid string and 
 * whether it matches the passed pattern
 * @param {string} text The text to validate
 * @param {string|RegExp} to_match The pattern to match
 * @returns {boolean} Returns true if the text is valid,
 * otherwise returns false.
 */
function findValidMatch(text, to_match) {
  return Boolean(
    typeof text === 'string' && text.match(to_match)
  );
}

function DecoratedText ({ text = '' }) {
  const text_segments = splitByMatchedText(text);

  if (text_segments.length === 1) {
    return (
      <>{text}</>
    )
  }

  return (
    <>
      {text_segments.map((text_segment, index) => {
        const key = `decorated-text-span-${index}`;

        const decorator = Object.values(DECORATION_PATTERNS)
          .find(({ to_match }) => findValidMatch(text_segment, to_match));

        if (decorator?.replaceWith) {
          return decorator.replaceWith(key, text_segment);
        }

        return (
          <span key={key}>{text_segment}</span>
        );
      })}
    </>
  )
};

export default DecoratedText;
