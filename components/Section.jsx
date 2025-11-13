import DecoratedText from './DecorateText';

/**
 * Generate a list of summaries
 * @param {object} props Set of attributes for Section 
 * @param {JSX.Element[]} props.children Section children
 * @param {string} props.title Section title
 * @param {string} props.className Section additional DOM classNames
 * @param {string} props.id Section DOM Id
 */
function Section({ children = [], title = '', className = '', id = '' }) {
  return (
    <section className={`top ${className}`} id={id}>
      <div className="container">
        <div className="text-wrapper w-full">
          <h2 className="title">
            <DecoratedText text={title} />
          </h2>
          <>
            {children}
          </>
        </div>
      </div>
    </section>
  );
}

export default Section;