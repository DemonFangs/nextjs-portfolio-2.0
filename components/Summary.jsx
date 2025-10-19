
/** 
 * @typedef SummaryItem
 * @property {string} title The title of the summary
 * @property {string|string[]} value The value associated with the title
*/

/**
 * Generate a list of summaries
 * @param {object} props Set of attributes for summary 
 * @param {SummaryItem[]} props.items The items to render
 */
function Summary({ items = [] }) {
  return (
    <div className="summary-container">
      {items.map((item, index) => {
        const { title = '', value = '' } = item || {};
        return (
          <div key={index} className="summary-item">
            <div>{value}</div>
            <div>{title}</div>
          </div>
        );
      })}
    </div>
  );
}

// box.scss
export default Summary;