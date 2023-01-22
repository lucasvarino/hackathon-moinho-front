import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import imgHomePage from "../../public/img/imgHomePage.png";
import imgHomePage2 from "../../public/img/imgHomePage2.png";
import imgHomePage3 from "../../public/img/imgHomePage3.png";
import Footer from "@/components/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={styles.mainHome}>
        {/* NAVBAR */}

        <div className={styles.containerOne}>
          <div className={imgHomePage}>
            <Image src={imgHomePage} height={380} width={1225} alt="img" />

            <div className={styles.containerTwo}>
              <h1 className={styles.TextImg}>
                Encontre um profissional da saúde
              </h1>
              <h3 className={styles.subTextImg}>
                Tem alguma clínica, consultório ou hospital? Invista em um
                profissional novo ou recém formado
              </h3>

              <div className={styles.buttonCont}>
                <button className={styles.btnImg}>Sou um profissional</button>
                <button className={styles.btnImg}>
                  Estou buscando um profissional
                </button>
                {/* TROCAR OS BOTÕES NO TAILWIND */}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.blueConteiner}>
          <div className={styles.imgBlueCont}>
            <Image src={imgHomePage2} height={200} width={400} alt="img" />
          </div>

          <div className={styles.textBlueCont}>
            <h1 className={styles.textBlue}>
              Veja as especializações que mais estão sendo empregadas
            </h1>
            <h3 className={styles.textBlue}>
              Saiba o que os principais hospitais e clínicas estão procurando e
              encontre o local perfeito para trabalhar{" "}
            </h3>
            <div className={styles.contBtnBlue}>
              <button className={styles.btnBlue}>
                Crie seu perfil como Profissional
              </button>
            </div>
          </div>
        </div>

        <div className={styles.containerThree}>
          <div className={styles.textContThree}>
            <h1>
              Saiba o perfil dos profissionais que estão formando nas
              universidades de Juiz de Fora
            </h1>
            <h3>
              Veja quais são as áreas com maior índice de formação, as
              universidades com mais disponibilidade de profissionais e etc
            </h3>

            <div className={styles.contBtnThree}>
              <button className={styles.btnThree}>
                Crie seu perfil como Empresa
              </button>
            </div>
          </div>

          <div className={styles.imgContThree}>
            <Image src={imgHomePage3} height={200} width={400} alt="img" />
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
