import Image from "next/image";
import { getImagePath } from "../../../lib/utils";

interface cardDataType {
  imgSrc: string;
  heading: string;
  percent: string;
  subheading: string;
}

const cardData: cardDataType[] = [
  {
    imgSrc: getImagePath("/assets/buyers/ourbuyers.svg"),
    percent: "+5 mil",
    heading: "Ordens gerenciadas",
    subheading:
        "Controle completo de ordens de serviço com atualização em tempo real.",
  },
  {
    imgSrc: getImagePath("/assets/buyers/projectcompleted.svg"),
    percent: "24h",
    heading: "Rastreamento online",
    subheading:
        "Clientes acompanham o andamento do reparo usando um código exclusivo.",
  },
  {
    imgSrc: getImagePath("/assets/buyers/happybuyers.svg"),
    percent: "98%",
    heading: "Clientes satisfeitos",
    subheading:
        "Reduza dúvidas e aumente a confiança com atualizações automáticas.",
  },
  {
    imgSrc: getImagePath("/assets/buyers/teammembers.svg"),
    percent: "+100",
    heading: "Assistências técnicas",
    subheading:
        "Ideal para lojas de celulares, notebooks, informática e eletrônicos.",
  },
];

const Buyers = () => {
  return (
      <section className="mx-auto max-w-7xl py-20 px-6">

        <div className="text-center mb-16">
        <span className="text-[#050a30] font-semibold uppercase tracking-wider">
          Benefícios do sistema
        </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#050a30] mt-4">
            Tudo que sua assistência técnica precisa
          </h2>

          <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
            Organize atendimentos, acompanhe serviços e permita que seus clientes
            rastreiem pedidos de forma simples e profissional.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((items, i) => (
              <div
                  className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col items-center text-center"
                  key={i}
              >
                <div className="flex justify-center items-center bg-[#050a30]/10 p-4 rounded-2xl">
                  <Image
                      src={items.imgSrc}
                      alt={items.heading}
                      width={32}
                      height={32}
                  />
                </div>

                <h2 className="text-4xl lg:text-5xl text-[#050a30] font-bold mt-6">
                  {items.percent}
                </h2>

                <h3 className="text-2xl text-black font-semibold mt-4">
                  {items.heading}
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  {items.subheading}
                </p>
              </div>
          ))}
        </div>
      </section>
  );
};


export default Buyers;
