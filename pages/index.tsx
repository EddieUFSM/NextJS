import Head from 'next/head'
import styles from "@shared/home.module.css"
import Header from "@components/header/index"
import Navigation from '@components/Navigation/index'

export default function Home() {
  return (
    <>

      <Head>
        <title> Create Next App</title>
      </Head>
      <main className={styles.container}>
        <Navigation />
        <Header />
      </main>
    </>

  )
}
