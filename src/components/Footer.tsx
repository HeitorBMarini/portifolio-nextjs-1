import React from "react";
import {
    AiOutlineGithub,
   
    AiOutlineLinkedin,

    AiOutlineInstagram,
  } from "react-icons/ai"
import { BiLogoWhatsapp } from "react-icons/bi";
  

export default function Header (){
    return(
        <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
        <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
        <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
          <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
            © 2024 Heitor Borba Marini<a href="/" className="hover:underline"></a>
          </div>
          <div className="flex flex-row items-center justify-center space-x-2 mb-1">
            <a href="https://github.com/HeitorBMarini" rel="noreferrer" target="_blank">
              <AiOutlineGithub
                className="hover:-translate-y-1 transition-transform cursor-pointer text-black-500 dark:text-neutral-100"
                size={30}
              />
          
            </a>
  
            <a
              href="https://www.linkedin.com/in/heitor-borba-marini/"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineLinkedin
                className="hover:-translate-y-1 transition-transform cursor-pointer text-blue-500 dark:text-blue-500"
                size={30}
              />
            </a>
            <a
              href="https://www.instagram.com/heitor.marini195/"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineInstagram 
                className="hover:-translate-y-1 transition-transform cursor-pointer text-rose-500 dark:text-rose-600"
                size={30}
              />
            </a>

            <a href="https://api.whatsapp.com/send/?phone=%2B5511999657980&text&app_absent=0" rel="noreferrer" target="_blank">
          <BiLogoWhatsapp 
                className="hover:-translate-y-1 transition-transform cursor-pointer text-green-400 dark:text-green-400"
                size={30}
              />
          
            </a>
  
          </div>
        </div>
      </footer>
    )
}

