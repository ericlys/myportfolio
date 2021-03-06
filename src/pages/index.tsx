import Head from 'next/head'
import Image from 'next/image'
import styles from './about.module.scss'

export default function Home() {
  const yearsOld = new Date().getFullYear() - 1997;

  return (
    <>
      <Head>
        <title>About // Ericlys</title>
      </Head>
    
      <main className={styles.container}>
        <div className={styles.my}>
            <section className={styles.about}>
              <div className={styles.title}>
                <h1>
                  <span>Ericlys Moreira</span>, { yearsOld }
                </h1>
              </div>
               <span>
               📍São João do Rio do Peixe, Brazil
              </span>

              <p>
                Hi! <em>👋</em>, I&apos;m a <span>full stack </span> developer, passionate about technology.<br/>
              </p>
            </section>

            <div className={styles.image}>
              <Image
                src="/images/eric.jpg" 
                alt="Picture of the author" 
                width="350" 
                height="450"
              />
            </div>
          </div>
      </main>
    </>
  )
}
