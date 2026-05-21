import Image from "next/image";
import { getImagePath } from "../../../lib/utils";

const Banner = () => {
  return (
      <main>
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image">

            <div className="text-center">
            <span className="bg-[#050a30]/10 text-[#050a30] px-4 py-2 rounded-full text-sm font-medium">
              Sistema para Assistências Técnicas
            </span>

              <h1 className="mt-6 text-4xl font-bold text-[#050a30] sm:text-5xl lg:text-7xl leading-tight">
                Controle suas ordens de serviço
                <br />
                e permita que clientes acompanhem tudo em tempo real.
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                Gerencie aparelhos, clientes, técnicos e status de reparo em um só lugar.
                Gere códigos de rastreio automaticamente e reduza ligações perguntando
                sobre o andamento do serviço.
              </p>
            </div>

            <div className="text-center mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a   href="https://wa.me/5511990029866?text=Olá!%20Gostaria%20de%20testar%20o%20sistema%20gratuitamente."
                  type="button"
                  className="text-white font-medium bg-[#050a30] py-5 px-10 rounded-2xl hover:bg-[#0b1460] transition"
              >
                Testar gratuitamente
              </a>

              <a   href="https://wa.me/5511990029866?text=Olá!%20Gostaria%20de%20solicitar%20uma%20demonstração%20do%20sistema."
                  type="button"
                  className="text-[#050a30] border border-gray-300 font-medium py-5 px-10 rounded-2xl hover:bg-[#050a30] hover:text-white transition"
              >
                Solicitar demonstração
              </a>
            </div>

            <div className="mt-16">
              <Image
                  src={getImagePath("/assets/banner/dashboard.png")}
                  alt="Painel do sistema de ordem de serviço"
                  width={1200}
                  height={598}
                  className="rounded-3xl shadow-2xl"
              />
            </div>

          </div>
        </div>
      </main>
  );
};

export default Banner;