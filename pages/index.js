import Hero from '../components/hero'
import Head from 'next/head'
import Logos from '../components/logos'
import Coffee from '../components/coffee'
import Footer from '../components/footer'

export default function Home () {
  return (
    <div>
      <Head>
        <title>1-click Install for PrimeHub</title>
        <link rel="shortcut icon" href="/PrimeHub_icon_32.png" />
        <meta property="og:website" content="website" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"/>

        <script type="text/javascript" src="/hotjar.js" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-L0B04EW6NF" />
        <script type="text/javascript" src="/ga.js" />
      </Head>

      <Hero />

      <Logos />

      <Coffee />

      <Footer />
    </div>
  )
}
