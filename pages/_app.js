import React from 'react';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
