import Link from 'next/link';

/**
 * Generate the icon container
 * @param {object} props Set of attributes for summary 
 * @param {string} props.title Card title
 * @param {string} props.icon Card icon or picture
 * @param {boolean} props.no_bg The icon segment is not rendered
 */
function IconContainer({ title = '', icon = '', no_bg = false }) {
  let icon_dom = (<></>);
  if (icon) {
    icon_dom = (
      <img className="icon" src={icon} alt={`${title} icon`} />
    );
  }

  const class_names = [
      'icon-container',
      no_bg ? 'no-bg' : '',
    ]
    .filter(Boolean)
    .join(' ');
  return (
    <div className={class_names}>{icon_dom}</div> 
  )
}

/**
 * Generate the button container
 * @param {object} props Set of attributes for summary 
 * @param {string} props.link Card link
 * @param {boolean} props.link_button Creates a link button instead of using the
 * entire card as the link
 */
function ButtonContainer({ link = '', link_button = false }) {
  if (link && link_button) {
    return (
      <div className="btn-container">
        <Link className="btn-bg focus" href={link}>Check it out</Link>
      </div>
    );
  }

  return (<></>);
}

/**
 * Generate a list of summaries
 * @param {object} props Set of attributes for summary 
 * @param {string} props.className Card custom class names
 * @param {string} props.icon Card icon or picture
 * @param {string} props.title Card title
 * @param {JSX.Element} props.children Card content
 * @param {string} props.link Card link
 * @param {boolean} props.link_button Creates a link button instead of using the
 * entire card as the link
 * @param {boolean} props.no_bg The icon segment is not rendered
 */
function Card({ 
  className = '',
  icon = '', 
  title = '', 
  children = [], 
  link = '', 
  link_button = false,
  no_bg = false
}) {
  const card = (
    <div className={`card ${className}`}>
      <IconContainer icon={icon} title={title} no_bg={no_bg} />
      <h3 className="heading">{title}</h3>
      <div className="description">
        {children}
      </div>
      <ButtonContainer link={link} link_button={link_button} />
    </div>
  );

  if (!link_button && link) {
    return (
      <Link href={link}>{card}</Link> 
    );
  }

  return card;
}

// box.scss
export default Card;