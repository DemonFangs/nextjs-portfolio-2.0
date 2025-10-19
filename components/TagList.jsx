/**
 * Renders a list of tags with their corresponding links fetched from the
 * global variable, if exists, otherwise renders passed string
 * @param {object} props Tag attributes
 * @param {string[]} props.tags List of tags
 * @param {string} props.caption Caption of the tag list
 */
function TagList({ tags = [], caption = '' }) {
  return (
    <div className={`tags-wrapper ${caption ? '' : 'no-caption'}`}>
      {caption ? <div className="caption">{`${caption}:`}</div> : <></>}
      <div className="tags-container">
        {tags.map((tag, index) => {
          return (
            <div key={index} className="tag-item simple" title={tag}>
              {tag}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TagList;
