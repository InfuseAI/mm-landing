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
        <link rel="shortcut icon" href={t('favicon')} />
        <meta property="og:website" content="website" />
        <meta property="og:image" content={t('og-image')}/>

        <script type="text/javascript" src="/hotjar.js" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-W4HR0H1QVB" />
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
