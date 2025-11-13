import Highlight from "./Highlight";

const REGEX_MATCH = {
  HIGHLIGHT: /("[^"]+")/,
  BOLD: /(\*\*[^\*]+\*\*)/,
  CODE: /(`[^`]+`)/,
};

function splitByMatchedText(text_to_match) {
  if (!text_to_match) {
    return text_to_match;
  }

  return Object.values(REGEX_MATCH)
    .reduce((matched_texts, regex) => {
      return matched_texts
        .map(text => text.split(regex))
        .flat();
    }, [text_to_match]);
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

        if (text_segment.match(REGEX_MATCH.HIGHLIGHT)) {
          return (
            <Highlight key={key} text={text_segment.replace(/"/g, '')} />
          );
        }

        if (text_segment.match(REGEX_MATCH.BOLD)) {
          return (
            <b key={key}>{text_segment.replace(/\*/g, '')}</b>
          );
        }

        if (text_segment.match(REGEX_MATCH.CODE)) {
          return (
            <code key={key}>{text_segment.replace(/`/g, '')}</code>
          );
        }

        return (
          <span key={key}>{text_segment}</span>
        );
      })}
    </>
  )
};

export default DecoratedText;
