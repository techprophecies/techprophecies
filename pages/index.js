import {useCallback, useState} from 'react';

import Header from '../components/Header';
import Banner, {HeroFold} from '../components/Banner';
import Feature from '../components/Feature';
import Grid from '../components/Grid';
import Footer from '../components/Footer';
import {works} from '../works';

export default function IndexPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(() => {
    setActiveIndex((index) =>
      index == null ? index : (index + works.length - 1) % works.length,
    );
  }, []);
  const next = useCallback(() => {
    setActiveIndex((index) =>
      index == null ? index : (index + 1) % works.length,
    );
  }, []);

  return (
    <>
      <HeroFold>
        <Header />
        <Banner />
      </HeroFold>
      <Feature onOpen={setActiveIndex} />
      <Grid
        activeIndex={activeIndex}
        onOpen={setActiveIndex}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
      <Footer />
    </>
  );
}
