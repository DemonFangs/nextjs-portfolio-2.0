/**
 * Renders a sub segment that may reside inside a segment
 * @param {object} props Set of attributes for Section 
 * @param {string} props.text Text to highlight
 * @param {boolean} props.bg Whether to add background
 */
function Highlight({ text = '', bg = false }) {
  return (
    <span className={`highlight ${bg ? 'h-bg' : ''}`}>
      {text}
    </span>
  );
}

export default Highlight;