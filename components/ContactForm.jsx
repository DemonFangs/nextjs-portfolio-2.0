
function ContactForm() {
  return (
    <div className={`contact-wrapper`}>
      <div className="pre-text">
        <div>Contact @</div>
        <div className="image-block-wrapper ">
          {items.map(({ title, src, external_link }, index) => (
            <a
              key={`contact-form-section-${index}`}
              className="image-block-item"
              href={external_link}
              title={title}
              target="_blank"
              rel="noreferrer"
            >
              <img src={src} alt={`${title} icon`} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
