import Image from "next/image";

import projeto1 from "../public/projeto1.png";
import projeto2 from "../public/projeto2.png";
import projeto3 from "../public/projeto3.png";
import projeto4 from "../public/projeto4.png";
import projeto5 from "../public/projeto5.png";
import projeto6 from "../public/projeto6.png";

export default function Portfolio() {

    const projetos = [
        { id: 1, nome: projeto1, endereco: "https://github.com/jeziel-almeida/Projetos-React/tree/main/portfolio" },
        { id: 2, nome: projeto2, endereco: "https://github.com/jeziel-almeida/Projetos-React/tree/main/quiz" },
        { id: 3, nome: projeto3, endereco: "https://github.com/jeziel-almeida/flappybird-clone" },
        { id: 4, nome: projeto4, endereco: "https://github.com/jeziel-almeida/Projetos-React/tree/main/movies_lib" },
        { id: 5, nome: projeto5, endereco: "https://github.com/jeziel-almeida/AluraTube" },
        { id: 6, nome: projeto6, endereco: "https://github.com/jeziel-almeida/Projetos-React/tree/main/todo" }
    ]


    return (
        <section>
            <div>
                <h3 className="text-3xl py-1 mb-4 dark:text-white font-semibold border-b-2 border-teal-400">Portfolio</h3>
                <p className="text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
                    Aqui estão alguns projetos que realizei ao longo do meu aprendizado de programação front-end. São projetos que utilizam tecnologias como Javascript, HTML, CSS, Canvas, React, Next.js, Vite.js, entre outras.
                </p>
                <p className="text-md leading-8 text-gray-500 dark:text-gray-200/75">
                    Ao clicar na imagem, você será redirecionado ao link do repositório do projeto no github.
                </p>

            </div>

            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">

                {projetos.map((projeto) => (
                    <a href={projeto.endereco} target="_blank" rel="noreferrer" key={projeto.id} className="basis-1/3 flex-1">
                        <div className="border-4 rounded-xl hover:border-teal-400">
                            <Image
                                src={projeto.nome}
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                alt="projeto"
                            />
                        </div>
                    </a>
                ))}

            </div>
        </section>
    )
}