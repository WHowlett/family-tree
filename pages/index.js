import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/layout"
import styles from '../styles/Home.module.css'

import { getSortedList } from "../lib/data.js"
import PersonList from "../components/childs"

export async function getStaticProps () {
  const adult = await getSortedList(true);
  const Child = await getSortedList(false);
  return {
      props: {
          grown: adult,
          child: Child
      }
  };
}

export default function Home( { adult, child }) {
  return (
    <Layout home>
      <Head>
        <title>Family Tree</title>
      </Head>
      <div className="container">
        <div className="row text-center">
          <h1>Family tree</h1>
        </div>
        <div className="row align-center">
          <PersonList peeps={adult} />
          <PersonList peeps={child} isChild />
        </div>
      </div>
    </Layout>
  )
}