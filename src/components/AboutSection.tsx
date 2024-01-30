import React from "react"
import Image from "next/image"

const languages = [
  
  { skill: "C#" },
  { skill: "JavaScript" },
  { skill: "PHP" },
  { skill: "Node JS" },
  { skill: "Python" },
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
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me!
          <hr className="w-6 h-1 mx-auto my-4 bg-sky-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Heitor, and I am a{" "}
              <span className="font-bold">self-motivated</span> systems analyst
              based in São Paulo, BR.
            </p>
            <br />
            <p>
              I graduated from São Paulo State University, FIAP, in 2023 as a technologist,
              with a degree in systems analysis, and have been working in the
              field since mid-2023.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy,
              from studying, playing video games, riding a motorcycle, and exploring the world.
              I am always seeking new experiences and love to keep myself
              engaged in learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-sky-600">
                never stop growing
              </span>{" "}
              and that's what I strive to do. I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities and how they can change my life 🚀
            </p>

            <br/>
           
            
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Tech Languages</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {languages.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-slate-500 rounded font-semibold"
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