import React from 'react';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import NavBar from '../components/navbar';
import Footer from '../components/footer';

library.add(fab, far, fas);

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content ="width=device-width,initial-scale=1,user-scalable=yes" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
