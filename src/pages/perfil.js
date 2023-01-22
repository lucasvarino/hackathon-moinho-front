import Card from "@/components/Card";
import CardCurso from "@/components/CardCurso";
import Navbar from "@/components/Navbar";
import api from "@/services/api";
import Image from "next/image";
import { useEffect, useState } from "react";
import profile from "../../public/profile.jpeg";

export default function Perfil() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [especializacao, setEspecializacao] = useState([]);
  const [instituition, setInstituition] = useState(null);
  const [cursos, setCursos] = useState([]);
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get("/api/user");
      const data = await response.data;
      console.log(data);
      setName(data.user.name);
      setEspecializacao(data.roles);
      setCursos(data.courses);
      setVagas(data.vagas);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>
      {!loading && (
        <>
          <Navbar />
          <div className="">
            <div>
              <h1 className="text-4xl font-black mx-20 my-8">Meu Perfil</h1>
            </div>
            <div className="mx-[25vw] my-12">
              <div className="">
                <div className="border-2 h-36 flex max-w-7xl rounded-2xl items-center shadow-xl">
                  <Image
                    src={profile}
                    alt="Picture of the author"
                    width={125}
                    height={125}
                    className="rounded-2xl ml-4"
                  />
                  <div className="flex self-start flex-wrap max-w-[350px]">
                    <h1 className="text-2xl font-bold ml-10 pt-6 pr-48">
                      {name}
                    </h1>
                    {especializacao.map((item) => (
                      <div
                        key={item.index}
                        className="p-2 bg-slate-600 ml-10 mt-2 pt-3 rounded-2xl text-center"
                      >
                        <h3 className="text-md text-white">{item.name}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center py-10">
              <div className="w-[90%] border-2 rounded-lg shadow-md">
                <div className="">
                  <h1 className="text-xl p-10 font-bold">Meus Cursos:</h1>
                  <div className="flex justify-around">
                    {cursos.length === 0 ? (
                      <h1 className="text-xl p-10 font-bold">
                        Você não possui cursos
                      </h1>
                    ) : (
                      cursos.map((item) => (
                        <CardCurso
                          vagaId={item.id}
                          name={item.name}
                          teacherName={"Rodrigo Santos"}
                          description={item.description}
                          durationInHours={10}
                          price={500}
                          key={item.index}
                        />
                      ))
                    )}
                  </div>
                </div>
                <div className="">
                  <h1 className="text-xl p-10 font-bold">Vagas Aplicadas:</h1>
                  <div className="flex justify-around">
                    {vagas.map((item) => {
                      return (
                        <Card
                          id={1}
                          nomeInstituicao={item.institution[0].user[0].name}
                          nome={item.name}
                          especializacao={item.role_id[0].name}
                          descricao={item.description}
                          salario={item.salary}
                          key={item.index}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
