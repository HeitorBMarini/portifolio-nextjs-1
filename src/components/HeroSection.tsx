"use client" // this is a client component
import React from "react"
import Image from "next/image"

import { HiArrowDown } from "react-icons/hi"
import { Link } from "react-scroll"
import TypingAnimation from "./TypingAnimation"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn 
      animation-delay-2 my-6 py-14 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image 
            src="/foto-perfil.jpg"
            alt="perfil"
            width={295}
            height={295}
            className="rounded-full shadow-2xl max-w-72 max-h-72"
          />
        </div>
        <div className="md:mt-2 md:w-3/5 p-1">
        <TypingAnimation text="Olá, me chamo Heitor" /> 


          <p className="text-lg mt-8 mb-6 md:text-2xl">
            Sou{" "}
            <span className="font-semibold text-sky-600">
              
Anallista e desenvolvedor de sistemas,{" "}
            </span>
           trabalhando com desenvolvimento de software.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-sky-600 rounded shadow hover:bg-sky-400"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projetos
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection