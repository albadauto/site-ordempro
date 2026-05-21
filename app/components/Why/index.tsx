import Image from "next/image";
import { getImagePath } from "../../../lib/utils";

interface whydata {
  heading: string;
  subheading: string;
}

const whydata: whydata[] = [
  {
    heading: "Mais organização",
    subheading:
        "Controle todas as ordens de serviço, clientes e aparelhos em um único painel.",
  },
  {
    heading: "Menos ligações e mensagens",
    subheading:
        "Clientes acompanham o status do reparo online sem precisar entrar em contato.",
  },
  {
    heading: "Atendimento mais profissional",
    subheading:
        "Transmita mais confiança com rastreamento em tempo real e atualizações automáticas.",
  },
];

const Why = () => {
  return (
      <section id="about">
        <div className="mx-auto max-w-7xl px-4 my-20 sm:py-24 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* COLUMN-1 */}
            <div className="flex justify-center lg:justify-start">
              <Image
                  src={getImagePath("/assets/why/iPad.png")}
                  alt="Painel do sistema"
                  width={900}
                  height={900}
                  className="w-full max-w-2xl drop-shadow-2xl"
              />
            </div>

            {/* COLUMN-2 */}
            <div>

            <span className="text-[#050a30] font-semibold uppercase tracking-wider">
              Por que escolher nosso sistema
            </span>

              <h2 className="text-4xl lg:text-5xl pt-4 font-bold leading-tight text-[#050a30] text-center lg:text-start">
                Mais controle para sua assistência técnica.
              </h2>

              <p className="text-lg pt-6 font-normal leading-8 text-gray-600 text-center lg:text-start">
                Automatize processos, acompanhe serviços em tempo real e ofereça
                uma experiência mais moderna para seus clientes.
              </p>

              <div className="mt-12 space-y-8">
                {whydata.map((items, i) => (
                    <div
                        className="flex items-start gap-5"
                        key={i}
                    >
                      <div className="rounded-2xl min-h-[52px] min-w-[52px] flex items-center justify-center bg-[#050a30]/10">
                        <Image
                            src={getImagePath("/assets/why/check.svg")}
                            alt="check"
                            width={24}
                            height={24}
                        />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-[#050a30]">
                          {items.heading}
                        </h3>

                        <p className="text-lg text-gray-600 font-normal mt-2 leading-7">
                          {items.subheading}
                        </p>
                      </div>
                    </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
  );
};

export default Why;