import Navbar from "@/components/Navbar";
import Pagination from "@/components/Pagination";
import CardCurso from "@/components/CardCurso";

export default function Cursos() {
  return (
    <div>
      <Navbar />
      <main className="py-12">
        <div className="flex justify-center">
          <h1 className="text-black text-5xl font-bold center my-16 text-center">
            Procure por um curso
          </h1>
        </div>
        <div className="flex justify-center">
          <form className="w-2/3">
            <label className="relative block">
              <input
                className="w-full bg-white placeholder:font-italitc border border-slate-400 drop-shadow-md rounded-xl py-6 pl-6 pr-10 focus:outline-none text-xl"
                placeholder="Digite uma área, cargo ou especialidade..."
                type="text"
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
        <div className="flex flex-wrap justify-evenly my-10 mx-10">
          <CardCurso
            id={1}
            name={"Finanças na área da saúde"}
            teacherName={"Rodrigo Santos"}
            durationInHours={10}
            price={500}
          />
          <CardCurso
            id={2}
            name={"Legislação na área da saúde"}
            teacherName={"Rodrigo Santos"}
            durationInHours={8}
            price={400}
          />
          <CardCurso
            id={3}
            name={"Gestão na área da saúde"}
            teacherName={"Rodrigo Santos"}
            durationInHours={12}
            price={550}
          />
          <CardCurso
            id={3}
            name={"Gestão na área da saúde"}
            teacherName={"Rodrigo Santos"}
            durationInHours={12}
            price={550}
          />
        </div>
        <Pagination />
      </main>
    </div>
  );
}