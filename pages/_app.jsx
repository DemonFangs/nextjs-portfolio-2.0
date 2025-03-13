import '../styles/app.css';

import Layout from '../components/Layout';
import { GlobalProvider } from '../contexts/globalContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalProvider>
  );
}
