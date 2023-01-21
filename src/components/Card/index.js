import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/24/outline";

export default function Card() {
  return (
    <>
      <div class="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow">
        <a href="#" className="flex items-center justify-around">
          <Image src="hospital.svg" alt="Hospital" width={100} height={100} />
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Hospital Albert Sabin
          </h5>
        </a>
        <a href="#">
          <h6 className="text-xl">Ortopedista Pediatra</h6>
        </a>
        <div className="flex justify-between">
          <p className="text-gray-700 font-bold text-xs my-3">1 dia atrás</p>
          <p className="text-gray-700 font-bold text-xs my-3">Integral</p>
          <p className="text-gray-700 font-bold text-xs my-3">R$50.000</p>
          <p className="text-gray-700 font-bold text-xs my-3">
            45 pessoas aplicaram
          </p>
        </div>
        <p class="mb-3 font-normal text-gray-700 text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic
        </p>
        <div className="flex justify-start">
          <MapPinIcon height={17} width={17} className="mr-3" />
          <p className="mb-3 text-gray-700 font-bold text-sm">
            Avenida Rio Branco, 95, Centro
          </p>
        </div>
        <a
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          Read more
          <svg
            aria-hidden="true"
            class="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </>
  );
}
