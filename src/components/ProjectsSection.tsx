import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "GS-EyeCrop",
    description:
      "GS-EyeCrop is a mobile aplicattion that helps people with battle against food waste ",
    image: "/eye crop.png",
    github: "https://github.com/HeitorBMarini/GS-Eyecrop",
    link: "https://github.com/HeitorBMarini/GS-Eyecrop",
  },
  {
    name: "Tailwind-Css Spotify",
    description: "A Front-End project with the template of Spotify, made with Tailwind-css and next js",
    image: "/Spotify.png",
    github: "https://github.com/HeitorBMarini/Tailwind-Css-Spotify?tab=readme-ov-file",
    link: "https://tailwind-css-spotify-l9o9.vercel.app/",
  },
  {
    name: "WebSocket - React JS",
    description:
      "A basic WebSocket project with React JS",
    image: "/WebSocket.png",
    github: "https://github.com/HeitorBMarini/WebSocket-react",
    link: "https://web-socket-react.vercel.app/",
  },
  {
    name: "Kanban Flow - React JS",
    description:
      "A project type Kambam for control your tasks",
    image: "/Kanbam.png",
    github: "https://github.com/HeitorBMarini/Reactjs-KanbamFlow?tab=readme-ov-file",
    link: "https://5n8cgr.csb.app",
  },
]


const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-sky-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection