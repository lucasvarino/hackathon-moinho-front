import Navbar from "@/components/Navbar";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { VideoCameraIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Curso() {
  const [open, setOpen] = useState(0);
  const router = useRouter();
  const { id } = router.query;

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <Navbar />
      <div className="text-4xl font-black my-6 mx-12">
        <h1>Bootcamp Contabilidade Hospitalar</h1>
      </div>

      <div className="mx-8 flex">
        <iframe
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          width="60%"
          height="600"
          className="border-2 rounded-2xl aspect-video"
        ></iframe>
        <div className="ml-10 rounded-2xl border-2 h-[600px] w-[50%]">
          <>
            <Accordion
              className="bg-slate-200"
              open={open === 1}
              icon={<Icon id={1} open={open} />}
            >
              <AccordionHeader className="px-4" onClick={() => handleOpen(1)}>
                Módulo 1 - Introdução
              </AccordionHeader>
              <AccordionBody className="px-4">
                <Link href={""}>
                  <div className="flex justify-start items-center border border-slate-400 p-3 rounded-2xl">
                    <VideoCameraIcon width={25} height={25} />
                    <div className="flex justify-start mx-2">
                      <h5 className="font-bold text-lg">Vídeo 1 - </h5>
                      <h6 className="text-lg mx-3">Introdução ao Curso</h6>
                    </div>
                  </div>
                </Link>
                <Link href={""}>
                  <div className="flex justify-start items-center border border-slate-400 p-3 rounded-2xl my-4">
                    <VideoCameraIcon width={25} height={25} />
                    <div className="flex justify-start mx-2">
                      <h5 className="font-bold text-lg">Vídeo 2 - </h5>
                      <h6 className="text-lg mx-3">Como acessar o material</h6>
                    </div>
                  </div>
                </Link>
              </AccordionBody>
            </Accordion>
            <Accordion
              className="bg-slate-200"
              open={open === 2}
              icon={<Icon id={2} open={open} />}
            >
              <AccordionHeader className="px-4" onClick={() => handleOpen(2)}>
                Módulo 2 - Organização dos Documentos
              </AccordionHeader>
              <AccordionBody className="px-4">
                <Link href={""}>
                  <div className="flex justify-start items-center border border-slate-400 p-3 rounded-2xl">
                    <VideoCameraIcon width={25} height={25} />
                    <div className="flex justify-start mx-2">
                      <h5 className="font-bold text-lg">Vídeo 1 - </h5>
                      <h6 className="text-lg mx-3">Introdução ao Curso</h6>
                    </div>
                  </div>
                </Link>
                <Link href={""}>
                  <div className="flex justify-start items-center border border-slate-400 p-3 rounded-2xl my-4">
                    <VideoCameraIcon width={25} height={25} />
                    <div className="flex justify-start mx-2">
                      <h5 className="font-bold text-lg">Vídeo 2 - </h5>
                      <h6 className="text-lg mx-3">Como acessar o material</h6>
                    </div>
                  </div>
                </Link>
              </AccordionBody>
            </Accordion>
          </>
          <div className="flex justify-center items-center my-60 text-slate-400">
            <h1 className="text-xl font-bold max-w-sm text-center">
              Estamos Trabalhando em mais módulos para você!
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
