import dynamic from 'next/dynamic';
import Head from 'next/head';
import {useRouter} from 'next/router';

import {Page} from '../components';

import 'nprogress/nprogress.css';
import '../components/styles/nprogress.css';

const TopProgressBar = dynamic(
  () => {
    return import('../components/TopProgressBar.js');
  },
  {ssr: false},
);

export default function MyApp({Component, pageProps}) {
  const router = useRouter();
  const bare = router.pathname === '/metaverse';
  const fold = router.pathname === '/';

  return (
    <Page bare={bare} fold={fold}>
      <Head>
        <title>Tech Prophecies</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <TopProgressBar />
      <Component {...pageProps} />
    </Page>
  );
}
