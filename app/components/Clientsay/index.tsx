import Image from "next/image";

const Clientsay = () => {
  return (
      <section className="mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:px-8" id="nossosclientes">

        <div className="bg-[#f4f7ff] rounded-[40px] py-20 px-6 lg:px-16 relative overflow-hidden">

          {/* HEADER */}
          <div className="text-center max-w-4xl mx-auto">

          <span className="text-[#050a30] font-semibold uppercase tracking-wider">
            Depoimentos
          </span>

            <h2 className="text-[#050a30] text-4xl lg:text-6xl font-bold mt-5 leading-tight">
              O que nossos clientes dizem.
            </h2>

            <p className="text-lg font-normal text-gray-600 text-center mt-6 leading-8">
              Assistências técnicas de todo o Brasil utilizam o OrdemPro para
              organizar serviços, melhorar o atendimento e oferecer rastreamento
              em tempo real para clientes.
            </p>

          </div>

          {/* CONTENT */}
          <div className="mt-20 flex flex-col lg:flex-row gap-10 justify-center items-center">

            {/* CARD 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl max-w-md w-full">

              <div className="flex items-center gap-4">


                <div>
                  <h3 className="text-xl font-bold text-[#050a30]">
                    Carlos Henrique
                  </h3>

                  <p className="text-gray-500">
                    Assistência Técnica Mobile
                  </p>
                </div>
              </div>

              <p className="text-gray-600 leading-8 mt-6">
                “Depois que começamos a usar o OrdemPro, os clientes pararam de
                ligar perguntando sobre status do conserto. O rastreamento online
                melhorou muito nosso atendimento.”
              </p>

            </div>

            {/* CARD 2 */}
            <div className="bg-[#c1ff72] rounded-3xl p-8 shadow-xl max-w-md w-full">

              <div className="flex items-center gap-4">

                <div>
                  <h3 className="text-xl font-bold text-black">
                    Fernanda Souza
                  </h3>

                  <p className="text-gray-300">
                    Loja de Informática
                  </p>
                </div>
              </div>

              <p className="text-gray-200 leading-8 mt-6">
                “O sistema deixou nossa operação muito mais organizada. Agora
                conseguimos controlar ordens e clientes em um único
                painel.”
              </p>

            </div>

          </div>

        </div>
      </section>
  );
};

export default Clientsay;