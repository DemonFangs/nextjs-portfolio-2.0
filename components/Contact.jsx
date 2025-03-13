const items = [
  {
    title: 'Mail me',
    src: '/mail-icon.png',
    external_link: 'mailto:khadem.avinoor@gmail.com'
  },
  {
    title: 'Github Page',
    src: '/github-icon.png',
    external_link: 'https://github.com/DemonFangs'
  },
  {
    title: 'LinkedIn Page',
    src: '/linkedin-icon.png',
    external_link: 'https://www.linkedin.com/in/khadem-avinoor-alam/'
  }
];

function Contact() {
  return (
    <div className={`contact-wrapper`}>
      <div className="pre-text">
        <div>Contact @</div>
        <div className="image-block-wrapper ">
          {items.map(({ title, src, external_link }, index) => (
            <a
              key={index}
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

export default Contact;
