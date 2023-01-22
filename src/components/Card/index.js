import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/24/outline";
import Tag from "../Tag";
import Link from "next/link";

export default function Card(props) {
  return (
    <>
      <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow">
        <a href={"/detalhesVaga/" + props.vagaId} className="flex items-center justify-around">
          <Image src="hospital.svg" alt="Hospital" width={100} height={100} />
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {props.nomeInstituicao}
          </h5>
        </a>
        <a href={"/detalhesVaga/" + props.vagaId}>
          <h6 className="text-xl">{props.nome}</h6>
        </a>
        <div className="flex justify-between">
          <p className="text-gray-700 font-bold text-xs my-3">{props.periodo}</p>
          <p className="text-gray-700 font-bold text-xs my-3">R$ {props.salario}</p>
          <p className="text-gray-700 font-bold text-xs my-3">
            45 pessoas aplicaram
          </p>
        </div>
        <a
          href={"/detalhesVaga/" + props.vagaId}
          className="mb-3 font-normal text-gray-700 text-sm"
        >
          {props.descricao}
        </a>
        <div className="flex justify-start my-4">
          <MapPinIcon height={17} width={17} className="mr-3" />
          <p className="mb-3 text-gray-700 font-bold text-sm">
            Avenida Rio Branco, 95, Centro
          </p>
        </div>
        <Tag className="bg-light-green text-dark-green">{props.especializacao}</Tag>
      </div>
    </>
  );
}
