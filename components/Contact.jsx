import ImageBlock from './ImageBlock';

const items = [
  {
    title: 'Mail me',
    imgSrc: '/mail.png',
    link: 'mailto:khadem.avinoor@gmail.com'
  },
  {
    title: 'Github Page',
    imgSrc: '/github.png',
    link: 'https://github.com/DemonFangs'
  },
  {
    title: 'LinkedIn Page',
    imgSrc:
      'https://www.seekpng.com/png/full/154-1546943_jpg-transparent-stock-linkedin-logo-svg-png-icon.png',
    link: 'https://www.linkedin.com/in/khadem-avinoor-alam/'
  }
];

function Contact({ asBar = false }) {
  return (
    <div className={`contact-wrapper ${asBar ? 'contact-bar' : ''}`}>
      <div className="pre-text">
        <ImageBlock srcList={items} />
      </div>
    </div>
  );
}

export default Contact;
