import TagList from '../TagList';

/** 
 * @typedef ExpSummaryItem
 * @property {string} title The title of the summary
 * @property {string[]} value The value associated with the title
*/

/**
 * Generates list of experience tags with number of 
 * experience for each
 * @param {object} props Set of attributes for summary 
 * @param {ExpSummaryItem[]} props.items The items to render
 */
function ExperienceSummary({ items }) {
  return (
    <div className="summary-container exp-summary">
      {items.map((item, index) => {
        const { title = '', values = [] } = item || {};
        return (
          <div key={index} className="summary-item">
            <div>{title}</div>
            <div className="ignore-style">
              <TagList tags={values} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Timeline() {
  return (
    <>
      <ExperienceSummary items={[
        { 
          title: '7+',
          values: [
            'NodeJS',
            'ExpressJS',
            'HTML5',
            'VanillaJS',
            'CSS/SCSS',
            'TypeScript',
            'ExpressJS',
            'git',
          ] 
        },
        {
          title: '6+',
          values: []
        },
        {
          title: '5+',
          values: []
        },
        {
          title: '4+',
          values: []
        },
        {
          title: '3+',
          values: []
        },
        {
          title: '2+',
          values: []
        },
        {
          title: 'Other',
          values: []
        },
      ]} />
    </>
  );
}

export default Timeline;
