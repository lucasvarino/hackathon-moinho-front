import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Pagination from "@/components/Pagination";
import styles from "@/styles/Vagas.module.css";

export default function Vagas() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <h1 className="text-black text-5xl font-bold center my-16 text-center">
          Procure por uma Vaga
        </h1>
      </div>
      <div className="flex justify-center">
        <form className="w-2/3">
          <label class="relative block">
            <input
              class="w-full bg-white placeholder:font-italitc border border-slate-400 drop-shadow-md rounded-xl py-6 pl-6 pr-10 focus:outline-none text-xl"
              placeholder="Digite uma área, cargo ou especialidade..."
              type="text"
            />

            <button class="absolute inset-y-0 right-0 flex items-center justify-center pr-3 bg-slate-400 rounded-xl w-16">
              <svg
                class="h-5 w-5 fill-black"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
              </svg>
            </button>
          </label>
        </form>
      </div>
      <div className="flex justify-center my-8">
        <h2 className="text-xl">Buscando em 2089 vagas</h2>
      </div>

      <div className="ml-16 my-16 flex justify-start">
        <h1 className="text-2xl font-bold">Exibindo 15 vagas</h1>

        <div class="mx-16  text-gray-700 md:flex md:items-center">
          <div class="mb-1 md:mb-0 bg-slate-200 text-center p-2 rounded-sm">
            <label for="forms-labelLeftInputCode" className="">
              Especialidade
            </label>
          </div>
          <div class="md:w-2/3 md:flex-grow">
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-sm rounded-sm block w-56 p-2.5 text-black"
            >
              <option selected>Escolha uma Especialidade</option>
              <option value="US">Ortopedia</option>
              <option value="CA">Pediatria</option>
              <option value="FR">Odontologia</option>
              <option value="DE">Médico Geral</option>
            </select>
          </div>
        </div>
        <div class="text-gray-700 md:flex md:items-center">
          <div class="mb-1 md:mb-0 bg-slate-200 text-center p-2 rounded-sm">
            <label for="forms-labelLeftInputCode" className="">
              Salário
            </label>
          </div>
          <div class="md:w-2/3 md:flex-grow">
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-sm rounded-sm block w-56 p-2.5 text-black"
            >
              <option selected>R$</option>
              <option value="US">Menos que R$2000,00</option>
              <option value="CA">Entre R$2000,00 e R$6000,00</option>
              <option value="FR">Entre R$6000,00 e R$9000,00</option>
              <option value="DE">Mais que R$9000,00</option>
            </select>
          </div>
        </div>
        <button class="mx-16  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Filtrar
        </button>
      </div>
      <div className="flex justify-between mb-10 mx-10">
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </>
  );
}
