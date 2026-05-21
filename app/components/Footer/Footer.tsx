"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
      <footer className="bg-[#050a30] -mt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-40 pb-10">
          {/* TOP */}
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3 items-start">

            {/* LOGO */}
            <div className="flex flex-col">
              <img
                  src="/assets/logo/logo-white.png"
                  alt="logo"
                  width={220}
                  className="mb-6"
              />

              <p className="text-white/80 text-sm leading-7 max-w-sm">
                Soluções inteligentes para gestão empresarial, automação de
                processos e atendimento digital.
              </p>
            </div>

            {/* LINKS */}
            <div className="flex flex-col md:items-center">
              <h3 className="text-white text-lg font-semibold mb-5">
                Navegação
              </h3>

              <div className="flex flex-col gap-3">
                <Link
                    href="#"
                    className="text-white hover:text-white transition"
                >
                  Início
                </Link>

                <Link
                    href="#"
                    className="text-white hover:text-white transition"
                >
                  Funcionalidades
                </Link>

                <Link
                    href="#"
                    className="text-white hover:text-white transition"
                >
                  Planos
                </Link>

                <Link
                    href="#"
                    className="text-white hover:text-white transition"
                >
                  Contato
                </Link>
              </div>
            </div>

            {/* CONTATO */}
            <div className="flex flex-col lg:items-end">
              <h3 className="text-white text-lg font-semibold mb-5">
                Contato
              </h3>

              <div className="flex items-center gap-3 mb-5">
                <Image
                    src="/assets/footer/telephone.svg"
                    alt="telephone-icon"
                    width={22}
                    height={22}
                />

                <span className="text-white">
                (11) 99002-9866
              </span>
              </div>

              <div className="flex items-center gap-3">
                <Image
                    src="/assets/footer/email.svg"
                    alt="email-icon"
                    width={22}
                    height={22}
                />

                <span className="text-white break-all">
                jose.albarraz@seqo.com.br
              </span>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="border-t border-white/10 mt-14 pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-white/70 text-center md:text-left">
              ©2026 Seqo Sistemas Inteligentes. Todos os direitos reservados.
            </p>

            <p className="text-sm text-white/70 text-center md:text-right">
              CNPJ: 66.806.593/0001-96
            </p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;