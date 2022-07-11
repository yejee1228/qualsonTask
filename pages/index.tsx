import type { NextPage } from 'next'
import Head from 'next/head'
import Main from './main/index'

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>EBTI</title>
      </Head>
      <Main />
    </div>
  )
}

export default Home
