import Head from 'next/head'

import "./globals.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>Jetty Chart</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default MyApp;