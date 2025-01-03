import React from 'react';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

import { library, config } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

import dynamic from 'next/dynamic';
import Footer from '../components/footer';
import { useScreenWidth, ScreenWidthContext } from '../hooks/useScreenWidthContext';

config.autoAddCss = false;

const NavBar = dynamic(() => import('../components/navbar'), { ssr: false });

library.add(fab, far, fas);

const imageUrl = 'http://d1btav10ks6qjy.cloudfront.net';

function MyApp({ Component, pageProps }) {
  const screenWidth = useScreenWidth();

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=yes" />
        <title>David Kim</title>
      </Head>
      <ScreenWidthContext.Provider value={screenWidth}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </ScreenWidthContext.Provider>
    </div>
  );
}

export { MyApp as default, imageUrl };
