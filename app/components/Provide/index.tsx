import Image from "next/image";
import Link from "next/link";

interface datatype {
  imgSrc: string;
  title: string;
  paragraph: string;
}

const Aboutdata: datatype[] = [
  {
    imgSrc: "/assets/provide/marketing.svg",
    title: "Controle de Ordens",
    paragraph:
        "Gerencie entradas, diagnósticos, aprovações e entrega dos aparelhos.",
  },
  {
    imgSrc: "/assets/provide/graphic.svg",
    title: "Tracking Online",
    paragraph:
        "Clientes acompanham o status do reparo usando um código exclusivo.",
  },
  {
    imgSrc: "/assets/provide/heaking.svg",
    title: "Atualizações em Tempo Real",
    paragraph:
        "Envie automaticamente mudanças de status e mantenha o cliente informado.",
  },
  {
    imgSrc:"/assets/provide/uidesign.svg",
    title: "Painel Completo",
    paragraph:
        "Tenha visão total de serviços, técnicos, clientes e faturamento.",
  },
];

const Provide = () => {
  return (
      <section id="conheca">
        <div className="mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* COLUMN-1 */}
            <div className="col-span-6 flex justify-center">
              <div className="flex flex-col justify-center p-4 lg:p-10">

              <span className="text-[#050a30] font-semibold uppercase tracking-wider text-center lg:text-start">
                Recursos do sistema
              </span>

                <h2 className="text-4xl lg:text-6xl pt-4 font-bold leading-tight text-[#050a30] text-center lg:text-start">
                  Tudo que sua assistência técnica precisa em um único sistema.
                </h2>

                <p className="text-lg pt-6 font-normal leading-8 text-gray-600 text-center lg:text-start">
                  Organize ordens de serviço, acompanhe reparos, atualize clientes
                  automaticamente e tenha mais controle sobre seu atendimento.
                  Ideal para assistências de celulares, notebooks, informática e
                  eletrônicos.
                </p>

                <Link
                    href="https://wa.me/5511990029866?text=Olá!%20Gostaria%20de%20conhecer%20o%20sistema."
                    className="mt-8 text-lg font-semibold text-[#050a30] flex gap-2 items-center mx-auto lg:mx-0 hover:gap-4 transition-all"
                >
                  Conhecer o sistema

                  <Image
                      src="/assets/provide/arrow.svg"
                      alt={"arrow"}
                      width={20}
                      height={20}
                  />
                </Link>

              </div>
            </div>

            <div className="lg:col-span-1"></div>

            {/* COLUMN-2 */}
            <div className="col-span-6 lg:col-span-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 py-8 bg-[#f4f7ff] rounded-[32px]">

                {Aboutdata.map((item, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-3xl p-7 shadow-md hover:shadow-2xl transition duration-300"
                    >
                      <Image
                          src={item.imgSrc}
                          alt={item.title}
                          width={64}
                          height={64}
                          className="mb-5"
                      />

                      <h3 className="text-2xl font-bold text-[#050a30]">
                        {item.title}
                      </h3>

                      <p className="text-base font-normal text-gray-600 mt-3 leading-7">
                        {item.paragraph}
                      </p>
                    </div>
                ))}

              </div>

            </div>
          </div>
        </div>
      </section>
  );
};

export default Provide;