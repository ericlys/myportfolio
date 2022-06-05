import Head from 'next/head'
import styles from './home.module.scss'

export default function Home() {
  return (
    <>
    <Head>
      <title>About | Ericlys</title>
    </Head>
    <h1 className={styles.title}>
     Ericlys
    </h1>
    </>
  )
}
