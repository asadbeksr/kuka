import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import AllToaster from '../src/components/AllToaser';
import PreLoader from '../src/layouts/PreLoader';
import ScrollTop from '../src/layouts/ScrollTop';
import store from '../src/redux/store';
import '../style/main.css';
function MyApp({ Component, pageProps }) {
  const [preloader, setPreloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      store && setPreloader(false);
    }, 2000);

    setTimeout(() => {
      if (typeof window !== 'undefined') {
        window.WOW = require('wowjs');
      }
      new WOW.WOW().init();
    }, 2000);
  }, []);
  return (
    <Provider store={store}>
      <Head>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
        <meta name='theme-color' content='#123e4e' />
        <meta name='robots' content='index,follow' />

        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/img/favicons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/img/favicons/favicon-16x16.png'
        />
        <link
          rel='apple-touch-icon'
          href='/img/favicons/apple-touch-icon.png'
        />
        <link rel='manifest' href='/images/favicons/site.webmanifest' />
        <link
          rel='android-chrome'
          sizes='192x192'
          href='/img/favicons/android-chrome-192x192.png'
        />
        <link
          rel='android-chrome'
          sizes='512x512'
          href='/img/favicons/android-chrome-512x512.png'
        />

        <title>THE KUKA</title>
        <meta name='description' content="THE KUKA UZ" />
        <meta
          name='keywords'
          content='portfolio, creative, unique, inspiring, react, next, software engineer, javascript, developer, frontend, asadbek, savronov, asadbek savronov,  udevs, udevs.io'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content="the-kuka.uz" />
        <meta property='og:title' content="THE KUKA" />
        <meta property='og:description' content="THE KUKA UZ" />
        {/* <meta property='og:image' content={image} /> */}
        <meta property='og:site_name' content="THE KUKA" />

        {/* <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={image} />
        <meta name='twitter:site' content={`@${twitterUsername}`} />
        <meta name='twitter:creator' content={`@${twitterUsername}`} /> */}
      </Head>
      {preloader ? <PreLoader /> : <ScrollTop />}
      <AllToaster />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
