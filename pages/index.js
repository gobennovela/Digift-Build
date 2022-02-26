import Head from 'next/head'
import Homepage from '../components/Homepage'

export default function Home() {
  return (
    <div className="dark:bg-darkBg bg-white">
      <Head>
        <title>Digift</title>
        <meta name="description" content="The digital assets world simplified" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Homepage />

    </div>
  )
}
