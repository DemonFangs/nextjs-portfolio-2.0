/**
 * Renders a sub segment that may reside inside a segment
 * @param {object} props Set of attributes for Section 
 * @param {JSX.Element[]} props.children Section children
 * @param {string} props.className Section additional DOM classNames
 * @param {string} props.id Section DOM Id
 * @param {string} props.icon Section icon to render
 */
function SubSegment({ children = [], className = '', id = '', icon = '' }) {
  return (
    <section className={`sub-segment ${className}`} id={id}>
      <div className="icon-container">
        {icon ? <img src={icon} alt="Decorative icon" tabIndex={-1} /> : <></>}
      </div>
      <div className="sub-content">
        {children}
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
};