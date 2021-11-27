import NProgress from 'nprogress';
import router, { Router } from 'next/router';
import Page from '../components/Page';

// TODO: Swap with our own
import 'nprogress/nprogress.css';
import '../components/styles/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.start());
Router.events.on('routeChangeError', () => NProgress.start());

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
