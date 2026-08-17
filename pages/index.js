import {useCallback, useState} from 'react';

import {Feature, Grid, Footer, Banner} from '../components';
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
      <Banner />
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
