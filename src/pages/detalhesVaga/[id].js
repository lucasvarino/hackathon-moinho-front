import Logo from "@/../public/images/logo-albert-sabin.png";
import { MapPinIcon } from "@heroicons/react/24/outline";

import Navbar from "@/components/Navbar";
import Tag from "@/components/Tag";

import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "@/services/api";

export default function DetalhesVaga() {
  const router = useRouter();
  const { id } = router.query;

  const [vaga, setVaga] = useState({});
  const [instituicao, setInstituicao] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      api.get(`/api/home/${id}`).then((response) => {
        console.log(response.data);
        setVaga(response.data.courses[0]);
        setInstituicao(response.data);

        setLoading(false);
      });
    }
  }, [id]);

  return (
    <>
      {!loading ? (
        <div>
          <Navbar></Navbar>
          <main className="px-40 bg-primary min-h-[90vh]">
            <div className="py-12">
              <div className="flex justify-start items-center">
                <Image
                  src={Logo}
                  alt="Logo da instituição"
                  className="h-32 w-32 object-contain mr-8"
                />
                <h1 className="font-bold text-2xl text-dark">
                  {instituicao.user[0].name}
                </h1>
              </div>
              <p className="text-dark text-justify">
                {instituicao.user[0].description}
              </p>
            </div>
            <div className="pb-12">
              <h2 className="text-dark font-bold text-xl mt-6 mb-4">
                {vaga.name}
              </h2>
              <div className="flex justify-between items-center">
                <div className="flex items-start text-light-gray">
                  <span>1 dia atrás</span>
                  <span className="ml-4">Integral</span>
                  <span className="ml-4">R$ {instituicao.salary}</span>
                  <span className="ml-4">45 pessoas aplicaram para a vaga</span>
                </div>
                <div>
                  <Tag className="bg-light-green text-dark-green">
                    Ortopedia
                  </Tag>
                  <Tag className="bg-light-red text-dark-red ml-4">
                    Pediatria
                  </Tag>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <MapPinIcon className="h-6 w-6 mr-2 text-dark"></MapPinIcon>
                <span className="text-light-gray">
                  Avenida Rio Branco, 95, Centro
                </span>
              </div>
              <p className="text-dark text-justify mt-8">{vaga.description}</p>

              <button className="bg-light-green text-dark-green hover:bg-medium-green transition-colors py-4 px-6 rounded-xl font-bold text-sm mt-12">
                Aplicar para vaga
              </button>
            </div>
          </main>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
