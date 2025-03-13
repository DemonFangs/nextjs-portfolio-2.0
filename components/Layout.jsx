import Link from 'next/link';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="root-content-container">
        {children}
      </div>
      <div className="get-pdf">
        <Link href="/Khadem-Avinoor-Alam-Resume.pdf" target="_blank" rel="noreferrer">
          <a className="pdf-link" title="Open resume PDF in new window">
            <img src="/pdf-icon.svg" alt="PDF icon" />
          </a>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Layout;