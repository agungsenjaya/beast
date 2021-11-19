import '../styles/globals.css'
import React from 'react'
import Head from 'next/head'
import Layout from '../components/client/layout'

function MyApp({ Component, pageProps }) {

    return(
      <Layout>
      <Component {...pageProps} />
    </Layout>
  );

  // return <Component {...pageProps} />
  // return(
  //   <React.Fragment>
  //   <Head>
  //       <title>Home | Beasties and friends</title>
  //        <meta name="description" content="Beasties and friends" />
  //        <link rel="icon" href="img/BAF-1.png" />
  //      </Head>
  //   <Component {...pageProps} />
  // </React.Fragment>
  // );
}

export default MyApp
