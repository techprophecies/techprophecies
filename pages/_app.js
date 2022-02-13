import NProgress from 'nprogress';

import dynamic from 'next/dynamic'

// ROUTING
import router, {Router} from 'next/router';

// COMPONENTS
import {Page} from '../components';

// TODO: Swap with our own
import 'nprogress/nprogress.css';
import '../components/styles/nprogress.css';

// Router.events.on('routeChangeStart', () => NProgress.start());
// Router.events.on('routeChangeComplete', () => NProgress.start());
// Router.events.on('routeChangeError', () => NProgress.start());

const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgressBar.js");
  },
  { ssr: false },
);

export default function MyApp({Component, pageProps}) {
  return (
    <Page>
      <TopProgressBar />
      <Component {...pageProps} />
    </Page>
  );
}
