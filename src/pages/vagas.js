import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Pagination from "@/components/Pagination";
import api from "@/services/api";
import { useEffect, useState } from "react";

export default function Vagas() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState("");
  const [vagas, setVagas] = useState([]);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    async function buscaCargos() {
      try {
        const response = await api.get('/api/roles');
  
        setRoles(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    buscaCargos();
  }, []);

  useEffect(() => {
    async function buscaVagas() {
      try {
        const response = await api.get('/api/home', {
          params: {
            ...(name && {
              name
            }),
            ...(role && {
              role
            }),
            ...(salary && {
              salary
            })
          }
        });
  
        setVagas(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }

    buscaVagas();
  }, [name, role, salary]);

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
          <label className="relative block">
            <input
              className="w-full bg-white placeholder:font-italitc border border-slate-400 drop-shadow-md rounded-xl py-6 pl-6 pr-10 focus:outline-none text-xl"
              placeholder="Digite uma área, cargo ou especialidade..."
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <button className="absolute inset-y-0 right-0 flex items-center justify-center pr-3 bg-slate-400 rounded-xl w-16">
              <svg
                className="h-5 w-5 fill-black"
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

        <div className="mx-16  text-gray-700 md:flex md:items-center">
          <div className="mb-1 md:mb-0 bg-slate-200 text-center p-2 rounded-sm">
            <label htmlFor="forms-labelLeftInputCode" className="">
              Especialidade
            </label>
          </div>
          <div className="md:w-2/3 md:flex-grow">
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-sm rounded-sm block w-56 p-2.5 text-black"
              value={role}
              onChange={(event) => setRole(event.target.value)}
            >
              <option selected>Escolha uma Especialidade</option>
              {
                roles.map((role) => (
                  <option
                    key={role.id}
                    value={role.id}
                  >{role.name}</option>
                ))
              }
              </select>
          </div>
        </div>
        <div className="text-gray-700 md:flex md:items-center">
          <div className="mb-1 md:mb-0 bg-slate-200 text-center p-2 rounded-sm">
            <label htmlFor="forms-labelLeftInputCode" className="">
              Salário
            </label>
          </div>
          <div className="md:w-2/3 md:flex-grow">
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-sm rounded-sm block w-56 p-2.5 text-black"
              value={salary}
              onChange={(event) => setSalary(event.target.value)}
            >
              <option selected>R$</option>
              <option value={2000}>Maior que R$2000,00</option>
              <option value={4000}>Maior que R$4000,00</option>
              <option value={6000}>Maior que R$6000,00</option>
              <option value={9000}>Maior que R$9000,00</option>
              <option value={15000}>Mais que R$15000,00</option>
            </select>
          </div>
        </div>
        <button className="mx-16  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Filtrar
        </button>
      </div>
      <div className="flex justify-evenly mb-10 mx-10">
        {
          vagas.map((vaga) => (
            <Card
              key={vaga.id}
              vagaId={vaga.id}
              nome={vaga.name}
              nomeInstituicao={vaga.user[0].name}
              periodo={vaga.period}
              salario={vaga.salary}
              descricao={vaga.description}
              especializacao={vaga.role[0].name}
            />
          ))
        }
      </div>
      <Pagination />
    </>
  );
}
