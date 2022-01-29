import "../styles/globals.css";
import { AppProps } from 'next/app'
import Layout from "../components/Layout";
import SEO from "../components/SEO";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <SEO title={process.env.siteTitle} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
