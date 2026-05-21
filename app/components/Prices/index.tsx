import Image from "next/image";
import Link from "next/link";

const plans = [
    {
        name: "Starter",
        price: "R$29.90",
        description: "Ideal para quem está começando.",
        features: [
            "50 clientes",
            "Suporte Básico",

        ],
        button: "Escolher plano",
        highlight: false,
        dark: true,
    },
    {
        name: "Professional",
        price: "R$49.90",
        description: "Perfeito para assistências em crescimento.",
        features: [
            "100 clientes",
            "Suporte prioritário",

        ],
        button: "Escolher plano",
        highlight: true,
        dark: false,
    },
    {
        name: "Ultimate",
        price: "R$99.90",
        description: "Para empresas que precisam de escala.",
        features: [
            "Clientes ilimitados",
            "Suporte prioritário",

        ],
        button: "Escolher plano",
        highlight: false,
        purple: true,
    },
];

const Plans = () => {
    return (
        <section
            id="planos"
            className="bg-[#02073b] min-h-screen flex items-center justify-center py-24 px-4"
        >
            <div className="max-w-7xl mx-auto w-full">

                {/* HEADER */}
                <div className="text-center mb-16">
                    <h2 className="text-white text-4xl lg:text-5xl font-bold">
                        Escolha seu plano
                    </h2>

                    <p className="text-white text-lg mt-4">
                        Encontre o plano ideal para você ou seu negócio
                    </p>
                </div>

                {/* CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-center">

                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`
                relative rounded-3xl p-8 transition-all duration-300
                ${plan.highlight
                                ? "bg-white border-4 border-[#00e676] scale-105 shadow-2xl"
                                : ""}
                ${plan.dark ? "bg-[#232857] border border-gray-500/30" : ""}
                ${plan.purple ? "bg-[#32175f] border border-purple-500/20" : ""}
              `}
                        >

                            {/* TAG */}
                            {plan.highlight && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#00e676] text-[#02073b] px-6 py-2 rounded-full text-sm font-bold uppercase">
                    Mais Popular
                  </span>
                                </div>
                            )}

                            {/* TITLE */}
                            <h3
                                className={`text-3xl font-bold ${
                                    plan.highlight ? "text-[#02073b]" : "text-white"
                                }`}
                            >
                                {plan.name}
                            </h3>

                            {/* PRICE */}
                            <div className="mt-6 flex items-end gap-2">
                <span
                    className={`text-5xl font-extrabold ${
                        plan.highlight ? "text-[#02073b]" : "text-white"
                    }`}
                >
                  {plan.price}
                </span>

                                <span
                                    className={`pb-2 text-lg ${
                                        plan.highlight ? "text-gray-500" : "text-white"
                                    }`}
                                >
                  /mês
                </span>
                            </div>

                            {/* DESCRIPTION */}
                            <p
                                className={`mt-4 text-base leading-7 ${
                                    plan.highlight ? "text-gray-500" : "text-white"
                                }`}
                            >
                                {plan.description}
                            </p>

                            {/* FEATURES */}
                            <div className="mt-8 space-y-5">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-4">

                                        <div
                                            className={`
                        min-w-[36px] min-h-[36px]
                        rounded-full flex items-center justify-center
                        ${plan.highlight
                                                ? "bg-[#00e676]/20"
                                                : "bg-white/10"}
                      `}
                                        >
                                            <Image
                                                src="/assets/why/check.svg"
                                                alt="check"
                                                width={18}
                                                height={18}
                                            />
                                        </div>

                                        <p
                                            className={`text-lg ${
                                                plan.highlight ? "text-gray-500" : "text-white"
                                            }`}
                                        >
                                            {feature}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* BUTTON */}

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Plans;