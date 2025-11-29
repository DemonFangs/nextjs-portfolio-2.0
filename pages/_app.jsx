import '../styles/app.scss';
import '../styles/box.scss';
import '../styles/navbar.scss';

import Layout from '../components/Layout';
import { GlobalProvider } from '../contexts/globalContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <link rel="icon" href="/favicon.png" sizes="any" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalProvider>
  );
}
