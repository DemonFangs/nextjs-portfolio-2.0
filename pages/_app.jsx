import '../styles/app.css';

import Navbar from '../components/Navbar';
import { GlobalProvider } from '../contexts/globalContext';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Navbar />

      <div className="root-content-container">
        <Component {...pageProps} />
      </div>
    </GlobalProvider>
  );
}
