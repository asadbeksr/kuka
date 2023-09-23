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
    
        <meta name='yandex-verification' content='c6dc08eab49ba6a2' />
      </Head>
      {preloader ? <PreLoader /> : <ScrollTop />}
      <AllToaster />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
