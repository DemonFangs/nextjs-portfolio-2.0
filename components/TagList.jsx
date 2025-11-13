/**
 * Sorts the passed the list
 * @param {*[]} list The list to sort
 * @param {boolean} descending Determines whether the sorted
 * list is in descending order
 * @returns {*[]} Returns a sorted list in ascending order
 * by default, if descending is true then returns a list in
 * descending order
 */
function sort(list = [], descending = false) {
  return list.sort((a, b) => {
    const modifier = descending ? -1 : 1;
    if (a < b) {
      return (-1 * modifier);
    }
    if (a > b) {
      return (1 * modifier);
    }
    return 0;
  });
}

/**
 * Filters the passed list to only show unique items
 * @param {*[]} list The list to sort
 * @returns {*[]} Returns a list of unique items with NO
 * duplicates
 */
function unique(list = []) {
  return list.filter((item, index, current_list) => {
    if (index <= 0) return true;
    return `${current_list[index - 1]}`.toLowerCase() != `${item}`.toLowerCase();
  });
};

/**
 * Renders a list of tags with their corresponding links fetched from the
 * global variable, if exists, otherwise renders passed string
 * @param {object} props Tag attributes
 * @param {string[]} props.tags List of tags
 * @param {string} props.caption Caption of the tag list
 * @param {boolean} props.no_sort Disables the default sorting
 */
function TagList({ tags = [], caption = '', no_sort = false }) {
  let tags_to_render = tags;
  if (!no_sort) {
    tags_to_render = sort(tags_to_render);
    tags_to_render = unique(tags_to_render)
  }
  return (
    <div className={`tags-wrapper ${caption ? '' : 'no-caption'}`}>
      {caption ? <div className="caption">{`${caption}:`}</div> : <></>}
      <div className="tags-container">
        {tags_to_render.map((tag, index) => {
          return (
            <div 
              key={`tag-item-${index}`} 
              className="tag-item simple" 
              title={tag}
            >
              {tag}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// box.scss
export default TagList;
