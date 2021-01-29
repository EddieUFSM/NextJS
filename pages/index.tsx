import Head from 'next/head'
import styles from '../styles/home.module.css'
import Header from '../components/header/index'

export default function Home() {
  return (
    <>
      <Head>
        <title> Create Next App</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main className={styles.container}>
        <Header />
      </main>
    </>

  )
}
