import Content from 'components/Content';
import Layout from 'components/Layout';
import Head from 'next/head';

const ErrorPage = () => {
  return (
    <Layout>
      <Head>
        <title>Error</title>
      </Head>
      <Layout.Content>
        <Content>
          <p>Something went wrong :(</p>
        </Content>
      </Layout.Content>
    </Layout>
  );
};

export default ErrorPage;
