import Content from 'components/Content';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Head from 'next/head';

import styles from './styles.module.css';

const title = 'Lambro Finance';
const description = 'There can only be 1 million Lambros. Are you one of them?';
const image = 'https://lambro.finance/images/lambrofinance.jpg';

const LandingPage = () => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>

        {'<!-- Meta -->'}
        <meta name="description" content={description} />

        {'<!-- Twitter -->'}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />

        {'<!-- Open graph -->'}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {'<!-- Favicon -->'}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <Header />
      <Layout.Content>
        <Content styles={[styles.landing]}>
          <img src="/images/lambrofinance.svg" />
          <h1>{title}</h1>
          <p>
            There can only be 1 million Lambros.
            <br />
            Are you one of them?
          </p>
          <p>
            <a
              href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x9685208eb8Daf44578c0da4257A5f0E5a6ef97e6"
              target="_blank"
              rel="noreferrer"
            >
              Buy LAMBRO!
            </a>
          </p>
        </Content>
      </Layout.Content>
      <Footer />
    </Layout>
  );
};

export default LandingPage;
