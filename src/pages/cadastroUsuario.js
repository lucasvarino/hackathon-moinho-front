import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function CadastroUsuario() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");
  const [userTypeSelected, setUserTypeSelected] = useState("1");
  const [cnpj, setCnpj] = useState("");

  const userTypes = [
    {
      value: "0",
      name: "Instituição"
    },
    {
      value: "1",
      name: "Profissional"
    },
    {
      value: "2",
      name: "Professor"
    }
  ];

  return (
    <div>
      <Navbar />
      <main className="px-40 py-12 bg-primary">
        <h1 className="font-bold text-2xl mb-4">Cadastro</h1>

        <div className="mt-10 sm:mt-0">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST" className="">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-6">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Nome
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        onChange={(event) => setName(event.target.value)}
                        value={name}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Senha
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        onChange={(event) => setPassword(event.target.value)}
                        value={password}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Descrição
                      </label>
                      <textarea
                        name="description"
                        id="description"
                        className="min-h-12 max-h-32 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        onChange={(event) => setDescription(event.target.value)}
                        value={description}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="user_type" className="block text-sm font-medium text-gray-700">
                        Tipo de usuário
                      </label>
                      <select
                        id="user_type"
                        name="user_type"
                        autoComplete="user_type"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        onChange={(event) => setUserTypeSelected(event.target.value)}
                        defaultValue={userTypes.find((userType) => userType.name === "Profissional").value}
                      >
                        {
                          userTypes.map(userType => (
                            <option
                              key={userType.value}
                              value={userType.value}
                            >{userType.name}</option>
                          ))
                        }
                      </select>
                    </div>
                    {
                      userTypeSelected === "0" &&
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="cnpj" className="block text-sm font-medium text-gray-700">
                          CNPJ
                        </label>
                        <input
                          type="text"
                          name="cnpj"
                          id="cnpj"
                          autoComplete="cnpj"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          onChange={(event) => setCnpj(event.target.value)}
                          value={cnpj}
                        />
                      </div>
                    }
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Cadastrar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
