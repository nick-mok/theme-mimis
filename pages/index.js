import Head from 'next/head';
import Layout from '../components/Layout';
import {attributes, react } from '../content/pages/home.md';

export default function Home() {
  return (
    <Layout pageTitle="Home" slides="true">
    
    </Layout>
  )
}

export const getStaticProps = (params) => {
  

  return {
    props: {}
  }
}
