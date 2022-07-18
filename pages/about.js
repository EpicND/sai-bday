import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me</title>
        <meta name="description" content="About Me" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>

      <main className={styles.main} >
        <h1 className={styles.title}>
          Hello! I&apos;m Sai.
        </h1>
      </main>

    </div>
  )
}
