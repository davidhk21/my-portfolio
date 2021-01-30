import React from 'react';

import '../styles/globals.css'
import Nav from 'react-bootstrap/Nav';

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
