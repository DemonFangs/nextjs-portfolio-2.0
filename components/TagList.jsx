import { useGlobalContext } from '../contexts/globalContext';

function TagList({ tags = [], caption = '' }) {
  const global_values = useGlobalContext();
  return (
    <div className={`tags-wrapper ${caption ? '' : 'no-caption'}`}>
      {caption ? <span className="caption">{`${caption}:`}</span> : <></>}
      <div className="tags-container">
        {tags.map((tag, index) => {
          const { title = '', link = '' } = global_values.breakdown[tag] || {};
          return (
            <span key={index} className="tag-item">
              <a href={link} title={title} target="_blank" rel="noreferrer">
                {title}
              </a>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default TagList;
