import Head from 'next/head'
import Image from 'next/image'
import styles from './about.module.scss'

export default function Home() {
  const birthDay = "1997-05-04";

  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  
  var partesData = birthDay.split("-");
  var myYear = parseInt(partesData[0]);
  var myMonth = parseInt(partesData[1]);
  var myDay = parseInt(partesData[2]);
  
  var yearsOld = year - myYear;
  
  if (month < myMonth || (month == myMonth && day < myDay)) {
    yearsOld--;
  }

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
                src="/images/eric.png" 
                alt="Picture of the author" 
                width="350" 
                height="450"
                objectFit='cover'
              />
            </div>
          </div>
      </main>
    </>
  )
}
