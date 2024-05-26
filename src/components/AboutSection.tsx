import React from "react"
import Image from "next/image"

const languages = [
  
  
  { skill: "JavaScript" },
  { skill: "PHP" },
  { skill: "Node JS" },
  { skill: "Python" },
  { skill: "Power BI " },
  { skill: "Jupyter Notebooks" },
  { skill: "Java" },
  { skill: "Flask" },
  { skill: "HTML"  },
  { skill: "CSS" },
  { skill: "Next.js" },
  { skill: "TypeScript" },
  { skill: "Tailwind CSS" },
  { skill: "SASS" },
  { skill: "BootStrap" },
  { skill: "React JS" },
  { skill: "React Native " },
 
  
]



const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48 animate-slideUpCubiBezier animation-delay-2">
        <h1 className="text-center font-bold text-4xl">
          Sobre Mim
          <hr className="w-6 h-1 mx-auto my-4 bg-sky-500 border-0 rounded"></hr>
        </h1>

        <div className="flex  flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
             Venha me conhecer
            </h1>
            <p>
              Olá meu nome é Heitor {" "}
             sou analista e desenvolvedor de sistemas
              que vive em  São Paulo, BR.
            </p>
            <br />
            <p>
             Formado no estado de São Paulo na universidade FIAP em Análise e desenvolvimento de sistemas.
            </p>
           
            <br />
            <p> Com experiência ampla em desenvolvimento Web envolvendo Html, Css, Java Script, React Js, Next Js, React Native.</p>
            <br />
            <p>
             Acredito que quando você{" "}
              <span className="font-bold text-sky-600">
                nunca desiste
              </span>{" "}
               tem uma paixão por
             tecnologia, muitas coisas podem mudar em suav vida e cada desafio, você evolui e descobre do que é capaz 🚀
            </p>
            <br/>
           
            
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Linguagens e Features</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {languages.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-slate-500 rounded font-semibold hover:bg-sky-500 hover:text-black"
                  >
                    {item.skill}
                  </p>
                )
              })}
              <br/>

            </div>
            <div>
            <Image
              src="/developer.svg"
              alt="Developer"
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0 mt-8"
            />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection