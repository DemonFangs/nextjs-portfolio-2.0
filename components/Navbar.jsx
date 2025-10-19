import Link from 'next/link';
import { withRouter } from 'next/router';

const NESTED_ACTIVE_CLASS = 'nested-active';

function Navbar({ router }) {
  const navs = [
    { text: 'Home', href: '/' },
    { text: 'Experiences', href: '/experiences' },
    { text: 'Contact', href: '/contact' },
  ];

  const isPath = (href, items = []) =>
    router.pathname === href ||
    (items.some((item) => router.pathname === item.href) && NESTED_ACTIVE_CLASS);

  const getLink = ({ href, text, items }) => {
    const activeItem = isPath(href, items);
    const activeClass = activeItem ? 'active' : '';
    const nestedActiveClass = activeItem === NESTED_ACTIVE_CLASS ? NESTED_ACTIVE_CLASS : '';

    return (
      <Link
        className={`nav-item ${activeClass} ${nestedActiveClass}`}
        href={href}
      >
        {text}
      </Link>
    );
  };

  const renderNested = ({ items = [] }) => {
    if (!(items && items.length)) return '';
    return (
      <div className="nested-nav">
        <ul>
          {items.map((item, index) => (
            <li key={index}>{getLink(item)}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="logo">
          Khadem A. Alam
        </Link>

        <ul className="nav-links">
          {navs.map((nav, index) => (
            <li key={index}>
              <>{getLink(nav)}</>
              <>{renderNested(nav)}</>
            </li>
          ))}
        </ul>
        <div className="get-pdf">
          <Link
            className="btn-bg pdf-link" 
            href="/Khadem-Avinoor-Alam-Resume.pdf"
            title="Open resume PDF in new window"
            target="_blank"
            rel="noreferrer"
          >
            Download resume
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
