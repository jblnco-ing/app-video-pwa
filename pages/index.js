import Head from 'next/head'
import Header from '../components/layouts/Header'
import ListContainer from '../components/shared/ListContainer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charset='utf-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
        <meta name='description' content='Description' />
        <meta name='keywords' content='Keywords' />
        <link rel='manifest' href='/manifest.json' />
        <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
        <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
        <link rel='apple-touch-icon' href='/apple-icon.png'></link>
        <meta name='theme-color' content='#FCBBB2' />
        <link rel="icon" href="/favicon.ico" />
        <title>Next.js PWA Example</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <ListContainer />
      </main>
    </div>
  )
}
