import Head from 'next/head';
import Layout from '../components/Layout';
import {attributes, react } from '../content/pages/home.md';

export default function Home() {
  console.log(attributes);
  return (
    <Layout pageTitle={attributes['page-meta']['title']} slides="true">
    <div className="container">
      <h3 class="h1">{attributes['title']}</h3>
      {attributes['intro']}
    </div>
    </Layout>
  )
}

export const getStaticProps = (params) => {

  console.log(attributes);

  return {
    props: {}
  }
}
