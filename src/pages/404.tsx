import Content from 'components/Content';
import Layout from 'components/Layout';
import Head from 'next/head';

const NotFoundPage = () => {
  return (
    <Layout>
      <Head>
        <title>Not found</title>
      </Head>
      <Layout.Content>
        <Content>
          <p>This page could not be found :(</p>
        </Content>
      </Layout.Content>
    </Layout>
  );
};

export default NotFoundPage;
