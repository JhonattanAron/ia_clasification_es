import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [textVacio, setTextoVacion] = useState(false);
  const [response, setResponse] = useState(3);
  const [estadoAnimo, setEstadoAnimo] = useState(false);
  const [loading, setLoading] = useState(false);

  const ProgressBar = () => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setPercentage((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1;
        });
      }, 50); // Incremento para completar en 5 segundos

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="m-5 my-6">
        <div className="block p-4 m-auto bg-white rounded-lg shadow w-72">
          <div>
            <span className="text-xs font-light inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-green-300">
              Procesando tu Texto
            </span>
          </div>
          <div className="w-full h-4 bg-gray-400 rounded-full mt-3">
            <div
              className="h-full text-center text-xs text-gray-500 bg-green-300 rounded-full"
              style={{
                width: `${percentage}%`,
                transition: "width 0.05s linear", // Suaviza la transición
              }}
            >
              {percentage}%
            </div>
          </div>
        </div>
      </div>
    );
  };

  const returnStadoDeAnimo = () => {
    if (response === 3) {
      return <></>;
    } else {
      return estadoAnimo ? (
        <div className="flex flex-col items-center">
          <img
            src="https://neetwork.com/wp-content/uploads/2019/10/como-ser-feliz-lo-que-implica.jpeg"
            alt="imagen feliz"
            className="w-[30vw] my-3"
          />
          <div
            className="bg-green-200 border-green-600 text-green-600 border-l-4 p-4 w-full"
            role="alert"
          >
            <p className="font-bold">¡Felicidades! 😊</p>
            <p>¡Estás de buen ánimo!</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <img
            src="https://files.mormonsud.org/wp-content/uploads/2019/10/enojo-3.jpg"
            alt="imagen triste"
            className="w-[30vw] my-3"
          />
          <div
            className="bg-red-200 border-red-600 text-red-600 border-l-4 p-4 w-full"
            role="alert"
          >
            <p className="font-bold">¡Una lástima! 😭</p>
            <p>No estás de buen humor.</p>
          </div>
        </div>
      );
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const api = "https://ai-textcl-fastapi.onrender.com/predict";
    const text = event.target.text.value;

    if (!text) {
      setTextoVacion(true);
      setResponse(3);
      return;
    }
    setTextoVacion(false);
    setLoading(true); // Activa el estado de carga

    try {
      const fecthPreict = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      const json = await fecthPreict.json();
      setEstadoAnimo(json.label);
      setResponse(json.label);
    } catch (error) {
      console.error("Error al obtener la respuesta:", error);
      // Manejar error si la API no responde
    } finally {
      setLoading(false); // Detiene el estado de carga solo cuando haya respuesta o error
    }
  };

  return (
    <div>
      <Head>
        <title>Analizador de Estado de Ánimo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center justify-center h-[100vh]">
        <div className="bg-white">
          <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
              <span className="block">Hola, Bienvenido</span>
              <span className="block text-purple-400">
                Comprueba tu estado de animo
              </span>
              <span className="block text-indigo-500">
                Escribe lo que estás pensando
              </span>
            </h2>
            <form onSubmit={handleSubmit}>
              <div>
                <div className="relative py-4">
                  <input
                    type="text"
                    id="text"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="text"
                    placeholder="Escribe lo que piensas"
                  />
                  {textVacio && (
                    <p className="absolute text-sm text-red-500 -bottom-6">
                      No puedes predecir con el input vacío
                    </p>
                  )}
                </div>
                {loading ? <ProgressBar /> : returnStadoDeAnimo()}
              </div>
              <div className="lg:mt-0 lg:flex-shrink-0">
                <div className="mt-12 inline-flex rounded-md shadow">
                  <button
                    type="submit"
                    className="py-4 px-6 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                  >
                    Predecir
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
