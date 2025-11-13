import DecoratedText from './DecorateText';
import Highlight from './Highlight';
import TagList from './TagList';

/**
 * Renders a segment header
 * @param {object} props Set of attributes for Segment 
 * @param {string} props.title Header text to render
 * @param {string} props.sub_text The sub-text or description for the header
 * @param {string} props.highlight Highlighted header
 */
function SegmentHeader({ title, sub_text, highlight }) {
  return (
    <div className="segment-header">
      <div className="header">
        <h2>{title}</h2>
        <div className="segment-header-highlight">
          <Highlight text={highlight} bg />
        </div>
      </div>
      <div>{sub_text}</div>
    </div>
  );
};

/**
 * Renders a segment content
 * @param {object} props Set of attributes for Segment 
 * @param {JSX.Element[]} props.children Segment children
 * @param {string} props.title Sub-eader of the content (if any)
 * @param {string} props.id Segment DOM Id
 */
function SegmentContent({ title = '', children = [], id = '' }) {
  return (
    <div className="segment-content" id={id}>
      <h3 className="header"><Highlight text={title} /></h3>
      <div className="content">{children}</div>
    </div>
  );
}

/**
 * Renders a segment footer
 * @param {object} props Set of attributes for Segment 
 * @param {JSX.Element[]} props.children Segment footer children
 */
function SegmentFooter({ tags = [] }) {
  return (
    <div className="segment-footer">
      <div>Technologies & skills</div>
      <div><TagList tags={tags} /></div>
    </div>
  )
};

/**
 * Renders a sub segment that may reside inside a segment
 * @param {object} props Set of attributes for Section 
 * @param {JSX.Element[]} props.children Section children
 * @param {string} props.className Section additional DOM classNames
 * @param {string} props.id Section DOM Id
 * @param {string} props.icon Section icon to render
 * @param {boolean} props.log Logging for debugging
 */
function SubSegment({ children = [], className = '', id = '', icon = '', log = false }) {
  if (log) {
    console.log({ children });
  }
  return (
    <section className={`sub-segment ${className}`} id={id}>
      <div className="icon-container">
        {icon ? <img src={icon} alt="Decorative icon" tabIndex={-1} /> : <></>}
      </div>
      <div className="sub-content">
        {
          [children].flat()
            .map?.((child, index) => {
              if (log) {
                console.log({ child });
              }
              if (typeof child === 'string') {
                return (
                  <DecoratedText key={`sub-segment-${index}`} text={child} />
                );
              }

              return child;
            })
        }
      </div>
    </section>
  );
}

/**
 * Renders a special segment
 * @param {object} props Set of attributes for Section 
 * @param {JSX.Element[]} props.children Section children
 * @param {string} props.className Section additional DOM classNames
 * @param {string} props.id Section DOM Id
 */
function Segment({ children = [], className = '', id = '' }) {
  return (
    <section className={`segment ${className}`} id={id}>
      <div className="container">
        <div className="text-wrapper w-full">
          {children}
        </div>
      </div>
    </section>
  );
}

// box.scss
export {
  Segment,
  SubSegment,
  SegmentHeader,
  SegmentContent,
  SegmentFooter,
};