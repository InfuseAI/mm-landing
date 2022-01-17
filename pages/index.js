import Hero from '../components/hero';
import Head from 'next/head';
import Logos from '../components/logos';
import Coffee from '../components/coffee';
import Footer from '../components/footer';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../next-i18next.config.js';


export default function Home () {
  const router = useRouter();
  const { t } = useTranslation('common');
  return (
    <div>
      <Head>
        <title>{t('title')}</title>
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ['common'],
        nextI18NextConfig
      )),
    },
  };
}
