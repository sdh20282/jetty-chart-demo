import App from 'next/app';
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

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;