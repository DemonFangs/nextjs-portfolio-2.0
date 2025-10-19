import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="root-content-container">
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;