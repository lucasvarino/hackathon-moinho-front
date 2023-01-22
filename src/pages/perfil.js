import CardCurso from "@/components/CardCurso";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import profile from "../../public/profile.jpeg";

export default function Perfil() {
  return (
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
                <h1 className="text-2xl font-bold ml-10 pt-6">Chuu do Loona</h1>
                <h3 className="text-lg ml-10 pt-3">Médica Pediatra</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-10">
          <div className="w-[90%] border-2 rounded-lg shadow-md">
            <div className="">
              <h1 className="text-xl p-10 font-bold">Meus Cursos:</h1>
              <div className="flex justify-around">
                <CardCurso
                  id={1}
                  name={"Finanças na área da saúde"}
                  teacherName={"Rodrigo Santos"}
                  durationInHours={10}
                  price={500}
                />
                <CardCurso
                  id={1}
                  name={"Finanças na área da saúde"}
                  teacherName={"Rodrigo Santos"}
                  durationInHours={10}
                  price={500}
                />
              </div>
            </div>
            <div className="">
              <h1 className="text-xl p-10 font-bold">Vagas Aplicadas:</h1>
              <div className="flex justify-around">
                <CardCurso
                  id={1}
                  name={"Hospital Albert Sabin"}
                  teacherName={"Ortopedista Pediatra"}
                  durationInHours={10}
                  price={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
