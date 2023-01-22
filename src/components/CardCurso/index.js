import Image from "next/image";
import Tag from "../Tag";

export default function CardCurso(props) {
  return (
    <div className="max-w-md w-md p-6 my-6 bg-white border border-gray-200 rounded-lg shadow">
      <a
        href={"/curso/" + props.id}
        className="flex items-center justify-around"
      >
        <Image src="hospital.svg" alt="Hospital" width={100} height={100} />
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
          {props.name}
        </h5>
      </a>
      <h6 className="text-md">Professor: {props.teacherName}</h6>
      <div className="flex justify-between">
        <p className="text-gray-700 font-bold text-xs my-3">
          {props.durationInHours} horas
        </p>
        <p className="text-gray-700 font-bold text-xs my-3">R$ {props.price}</p>
      </div>
      <a
        href={"/curso/" + props.id}
        className="mb-3 font-normal text-gray-700 text-sm max"
      >
        {props.description}
      </a>
      <div className="mt-4">
        <Tag className="bg-light-green text-dark-green">Ortopedia</Tag>
        <Tag className="bg-light-red text-dark-red ml-2">Pediatria</Tag>
      </div>
    </div>
  );
}
