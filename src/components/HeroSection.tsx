"use client" // this is a client component
import React from "react"
import Image from "next/image"

import { HiArrowDown } from "react-icons/hi"
import Link from "next/link"


const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image 
            src="/foto-perfil.jpg"
            alt=""
            width={295}
            height={295}
            className="rounded-full shadow-2xl max-w-72 max-h-72"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Heitor!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-sky-600">
              
Systems Analyst{" "}
            </span>
            based in São Paulo, Brazil. Working on <a href="https://www.sistemavanguard.com.br" target="_blank" className="font-semibold text-green-600">Sistema Vanguard</a> with Software develeoper
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
            Projects
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