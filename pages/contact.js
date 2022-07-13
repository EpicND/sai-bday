import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact Me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} >
        <h1 className={styles.title}>
          You can find me here!
        </h1>
      </main>

    </div>
  )
}
