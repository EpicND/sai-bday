import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Sai Shinde</title>
        <meta name="description" content="A website dedicated to my art" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
          <img className="title-image" src="/personal_painting.jpg" />
      </main> 
    </div>
  )
}
