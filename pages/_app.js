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
        <meta charset='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
        <meta name='theme-color' content='#123e4e' />
        <meta name='robots' content='index,follow' />

        <link rel='icon' href='/img/favicons/favicon.ico' type='image/x-icon' />

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
        <link rel='manifest' href='/img/favicons/site.webmanifest' />
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

        <title>THE KUKA - интернет-магазин носков</title>
        <meta
          name='description'
          content='The Kuka - интернет-магазин классических и удобных носков на каждый день. Мы предлагаем качественные носки от проверенных производителей по доступным ценам. Мы клиентоориентированная команда и не оставляем клиента без внимания. Если есть пожелания или замечания, напишите, пожалуйста нам в телеграм - @uzkuka.'
        />
        <meta
          name='keywords'
          content='THE KUKA, интернет-магазин, носки, классические, удобные, доступные цены, проверенные производители, качество'
        />

        <meta property='og:type' content='website' />

        <meta property='og:url' content='https://the-kuka.uz' />
        <meta
          property='og:title'
          content='THE KUKA - интернет-магазин носков'
        />
        <meta
          property='og:description'
          content='The Kuka - интернет-магазин классических и удобных носков на каждый день. Мы предлагаем качественные носки от проверенных производителей по доступным ценам. Мы клиентоориентированная команда и не оставляем клиента без внимания. Если есть пожелания или замечания, напишите, пожалуйста нам в телеграм - @uzkuka.'
        />
        <meta
          property='og:image'
          content='https://www.the-kuka.uz/img/logo/logo.png'
        />

        <meta property='og:site_name' content='THE KUKA' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='THE KUKA - интернет-магазин носков'
        />
        <meta
          name='twitter:description'
          content='The Kuka - интернет-магазин классических и удобных носков на каждый день. Мы предлагаем качественные носки от проверенных производителей по доступным ценам. Мы клиентоориентированная команда и не оставляем клиента без внимания. Если есть пожелания или замечания, напишите, пожалуйста нам в телеграм - @uzkuka.'
        />
        <meta
          name='twitter:image'
          content='https://www.the-kuka.uz/img/logo/logo.png'
        />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "https://schema.org",
            "@type": "Organization",
            "url": "https://www.the-kuka.uz/",
            "logo": "https://www.the-kuka.uz/img/logo/logo.png"
          }`,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `// public/metrika.js
          (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a);
            })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            
            ym(94525697, "init", {
              clickmap: true,
              trackLinks: true,
              accurateTrackBounce: true,
              webvisor: true
            });
            `,
          }}
        />

        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-LENYVL2JK3'
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-LENYVL2JK3');
            `,
          }}
        />

        <script
          type='text/javascript'
          dangerouslySetInnerHTML={{
            __html: ` (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
       
          ym(94598189, "init", {
               clickmap:true,
               trackLinks:true,
               accurateTrackBounce:true,
               ecommerce:"dataLayer"
          });`,
          }}
        />

        <noscript>
          <div>
            <img
              src='https://mc.yandex.ru/watch/94598189'
              style={
                {
                  position: 'absolute',
                  left: '-9999px',
                }
              }
              alt='yandex-metrika'
            />
          </div>
        </noscript>

        <meta name='yandex-verification' content='c6dc08eab49ba6a2' />
      </Head>
      {preloader ? <PreLoader /> : <ScrollTop />}
      <AllToaster />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
