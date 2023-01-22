import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import imgHomePage2 from "../../public/img/imgHomePage2.png";
import imgHomePage3 from "../../public/img/imgHomePage3.png";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <div className="w-full h-[80vh]">
        <div className="w-full h-full bg-doctor text-white">
          <div className="max-w-xl mx-8">
            <h1 className="text-5xl pt-24 pb-12 font-bold">
              Encontre um Profissional da Saúde
            </h1>
            <p className="text-xl">
              Tem alguma clínica, consultório ou hospital? Invista em um
              profissional novo ou recém formado
            </p>
            <p className="text-xl my-4">
              Capacite seus profissionais e aumente a produtividade da sua
              empresa, evitando a rotatividade de funcionários e aumentando a
              satisfação dos seus clientes.
            </p>
            <button className="bg-teal text-white font-bold py-2 px-4 rounded my-10 mr-12">
              Sou um Profissional
            </button>
            <button className="bg-teal text-white font-bold py-2 px-4 rounded my-10">
              Estou buscando um Profissional
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 h-[60vh] flex items-center justify-between">
        <Image
          src={imgHomePage2}
          alt=""
          width={459}
          height={228}
          className="ml-10"
        />
        <div className="pt-24 pb-12 flex text-end max-w-3xl mr-10 flex-wrap justify-end">
          <h1 className="text-5xl font-bold text-white mb-8">
            Veja as especializações que mais estão sendo empregadas{" "}
          </h1>
          <h2 className="text-white text-xl font-semibold">
            Saiba o que os principais hospitais e clínicas estão procurando e
            encontre o local perfeito para trabalhar{" "}
          </h2>
          <button className="bg-teal text-white font-bold py-2 px-4 rounded my-10">
            Sou um Profissional
          </button>
        </div>
      </div>
      <div className="flex h-[65vh]">
        <div className="flex flex-wrap justify-between items-center">
          <div className="ml-10 max-w-4xl">
            <h1 className="font-black text-5xl max-w-4xl mt-24">
              Saiba o perfil dos profissionais que estão formando nas
              universidades de Juiz de Fora
            </h1>
            <p className="font-semibold text-2xl max-w-4xl pt-10">
              Veja quais são as áreas com maior índice de formação, as
              universidades com mais disponibilidade de profissionais e etc
            </p>
            <button className="bg-teal text-white font-bold py-2 px-4 rounded my-10">
              Estou buscando um Profissional
            </button>
          </div>
          <Image
            src={imgHomePage3}
            alt=""
            width={459}
            height={228}
            className="ml-10"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
