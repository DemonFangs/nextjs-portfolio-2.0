function ExternalLink({ href = '', title = '', text = '' }) {
  return (
    <a
      className="external-link"
      href={href}
      title={title || text}
      target="_blank"
      rel="noreferrer"
    >
      <span>{text}</span>
      <img src="/external-link.svg" alt="External link icon" />
    </a>
  );
}

export default ExternalLink;
