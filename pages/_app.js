import React from 'react';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import dynamic from 'next/dynamic';
import Footer from '../components/footer';

const NavBar = dynamic(() => import('../components/navbar'), { ssr: false });

library.add(fab, far, fas);

const imageUrl = 'http://d82ay42odmokt.cloudfront.net';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=yes" />
        <title>David Kim</title>
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export { MyApp as default, imageUrl };
