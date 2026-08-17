import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import styled from 'styled-components';

import MarkLoader from './MarkLoader';

const Splash = styled.div`
  position: fixed;
  inset: 0;
  z-index: 7000;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  opacity: ${(p) => (p.$on ? 1 : 0)};
  transition: opacity 280ms ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const RouteMark = styled.div`
  position: fixed;
  top: max(16px, env(safe-area-inset-top));
  right: max(16px, env(safe-area-inset-right));
  z-index: 7500;
  pointer-events: none;
`;

const SPLASH_MS = 900;
const FADE_MS = 280;

export default function SiteLoader({skipSplash}) {
  const router = useRouter();
  const [splash, setSplash] = useState(!skipSplash);
  const [splashMounted, setSplashMounted] = useState(!skipSplash);
  const [routing, setRouting] = useState(false);

  useEffect(() => {
    if (!splashMounted || skipSplash) return undefined;
    let cancelled = false;

    const hide = () => {
      if (cancelled) return;
      setSplash(false);
    };

    const cap = window.setTimeout(hide, SPLASH_MS);
    const fonts =
      document.fonts && document.fonts.ready
        ? document.fonts.ready
        : Promise.resolve();
    fonts.then(() => {
      requestAnimationFrame(() => requestAnimationFrame(hide));
    });

    return () => {
      cancelled = true;
      window.clearTimeout(cap);
    };
  }, [splashMounted, skipSplash]);

  useEffect(() => {
    if (splash) return undefined;
    const timer = window.setTimeout(() => setSplashMounted(false), FADE_MS);
    return () => window.clearTimeout(timer);
  }, [splash]);

  useEffect(() => {
    const start = () => setRouting(true);
    const stop = () => setRouting(false);
    router.events.on('routeChangeStart', start);
    router.events.on('routeChangeComplete', stop);
    router.events.on('routeChangeError', stop);
    return () => {
      router.events.off('routeChangeStart', start);
      router.events.off('routeChangeComplete', stop);
      router.events.off('routeChangeError', stop);
    };
  }, [router.events]);

  return (
    <>
      {splashMounted ? (
        <Splash $on={splash} aria-hidden={!splash}>
          <MarkLoader size="lg" pulse />
        </Splash>
      ) : null}
      {routing ? (
        <RouteMark>
          <MarkLoader size="md" pulse />
        </RouteMark>
      ) : null}
    </>
  );
}
