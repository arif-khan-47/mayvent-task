import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      offset: 50,
      once: true,
      duration: 1500
    });
  }, []);
  return <Component {...pageProps} />
}
