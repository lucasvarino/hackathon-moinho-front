import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import imgHomePage from '../../public/img/imgHomePage.png'
import imgHomePage2 from '../../public/img/imgHomePage2.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    
      <main className={styles.mainHome}>  
        {/* NAVBAR */}

        <div className={styles.containerOne}>

          <div className={imgHomePage}>
            <Image
              src={imgHomePage} 
              height={380}
              width={1225}
              alt="img"

            />
            
            <div className={styles.containerTwo}>
              <h1 className={styles.TextImg}>Encontre um profissional da saúde</h1>
              <h3 className={styles.subTextImg}>Tem alguma clínica, consultório ou hospital? Invista em um profissional novo ou recém formado</h3>
              
              <div className={styles.buttonCont}>
                <button className={styles.btnImg}>Sou um profissional</button>
                <button className={styles.btnImg}>Estou buscando um profissional</button>
                {/* TROCAR OS BOTÕES NO TAILWIND */}

              </div>

            </div>
          </div>
        </div>

        <div className={styles.blueConteiner}>
          <div className={styles.imgBlueCont}>
            <Image 
              src={imgHomePage2} 
              height={200}
              width={400}
              alt="img"
            />
          </div>

          <div className={styles.textBlueCont}>
            <h1 className={styles.textBlue}>Veja as especializações que mais estão sendo empregadas</h1>

          </div>

        </div>

        <div className={styles.containerThree}>
          

        </div>


      </main>
    </>
  )
}
