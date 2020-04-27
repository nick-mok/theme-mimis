import Head from 'next/head';
import Layout from '../components/Layout';
import {attributes, react as HomeContent } from '../content/pages/home.md';

export default function Home(props) {
  return (
    <Layout pageTitle={attributes['page-meta']['title']} pageSlider={attributes['page-slider']}>
    <div className="container">
      <h3 className="h1">{attributes['title']}</h3>
      {attributes['intro']}
    </div>
    </Layout>
  )
}

export const getStaticProps = (params) => {
  const {attributes, html} = require('../content/pages/home.md');

  return {
    props: {
      pageMeta: attributes['page-meta'],
    }
  }
}
