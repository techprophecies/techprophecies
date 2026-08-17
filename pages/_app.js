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

  return (
    <Page bare={bare}>
      <Head>
        <title>Tech Prophecies</title>
      </Head>
      <TopProgressBar />
      <Component {...pageProps} />
    </Page>
  );
}
