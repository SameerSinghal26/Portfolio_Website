import React, { useState } from "react";
import { projects } from "../../components/Project.js";
import { NavLink } from "react-router-dom";



function Home() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <div className="col-span-8 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4">
        <div className="box-1 col-span-5 row-span-5 max-lg:col-span-8 max-md:col-span-full bg-bison_hide border-bison_hide rounded-xl  py-1 p-8 flex flex-col justify-end">
          <h1 className="max-w-[37rem] pb-6 font-heading text-[2rem] font-normal leading-snug xl:px-20">
            Hi, I'm Sameer Singhal
          </h1>
          <h2 className="max-w-[35rem] pb-8 font-heading text-[1rem] font-normal leading-snug">
            <span className="italic text-[1.5rem]">
              {" "}
              Pre-Final Year CSE Student & Full Stack Developer{" "}
            </span>{" "}
            Passionate about solving real-world problems through Data Structures, Algorithms, Development, and Competitive Programming. Currently pursuing Computer Science with a focus on building a strong foundation in modern software development and coding excellence.
          </h2>
        </div>
        <div className="box-2 col-span-3 row-span-5 max-lg:col-span-4 max-md:col-span-full bg-armadillo border-armadillo rounded-xl">
          <img
            src="Profile_pic.png"
            fetchPriority="high"
            decoding="async"
            alt="profile_image"
            className="w-full  object-full xl:p-8 xl:object-cover"
          />
        </div>
        <div className="box-3 col-span-4 row-span-4 max-lg:col-span-6 max-lg:min-h-[20rem] max-md:col-span-full bg-bison_hide border-bison_hide rounded-xl">
          <div className="flex size-full flex-col justify-between gap-4">
            <p className="max-w-[30rem] text-[.9rem] p-5 leading-[135%]">
              👨‍🎓
              <br />
              About Me 
              <br />
              I'm currently in my pre-final year of Computer Science Engineering,
              <br />
              driven by a deep passion for programming and problem-solving.
              <br />
              Currently, I'm in my 2nd year of studies.
              <br />
              Over the past few months, I’ve been building a strong foundation in Data Structures, Algorithms, and Full Stack Web Development.
              <br />
              I thrive on tackling challenging problems and love turning ideas into real-world applications. I'm also enthusiastic about exploring new technologies, continuously learning, and growing as a developer.
              <br />
              Beyond the code, you’ll often find me immersed in music 🎧, enjoying games 🎮, or diving into the latest tech trends.
              <br />
              Let’s connect, code, and collaborate! 🚀
            </p>
          </div>
        </div>
        <div className="box-4 col-span-4 row-span-4 max-lg:col-span-6 max-lg:min-h-[20rem] max-md:col-span-full bg-armadillo border-armadillo rounded-xl relative overflow-hidden">
          {/* Top left text */}
          <span className="absolute top-4 left-4 text-[#e5decd] text-base">Have some<br />questions?</span>
          {/* Top right arrow */}
          <span className="absolute top-4 right-4">
            <NavLink
              to='/contact'
            >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e5decd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
            </NavLink>
          </span>
          {/* Bottom left Contact me */}
          <span className="absolute left-4 bottom-8 text-[#e5decd] text-5xl font-serif font-bold">
            Contact <span className="italic">me</span>
          </span>
        </div>
      </div>
      <div className="col-span-4 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4">
        <div className="box-5 col-span-4 row-span-8 max-lg:col-span-full bg-bison_hide border-bison_hide rounded-xl overflow-y-auto">
          <div className="flex h-full flex-col p-6 gap-2 transition-transform duration-700">
            {projects.map((project, idx) => (
              <div key={project.title}>
                <div
                  className="flex items-center justify-between w-full cursor-pointer"
                  onClick={() => setOpenIndex(idx)}
                >
                  <h3 className="font-heading text-xl font-semibold font-serif">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="ml-2"
                  >
                    <img
                      src="arrow_button.png"
                      alt="arrow"
                      width={20}
                      height={20}
                      className="inline-block"
                    />
                  </a>
                </div>
                {openIndex === idx && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block aspect-[full] w-full overflow-hidden rounded-[16px] bg-secondary"
                  >
                    <img
                      alt={project.title}
                      src={project.image}
                      className="object-fill transition-transform duration-700 ease-out hover:scale-105"
                    />
                  </a>
                )}

                <hr className="my-4 border-black border-[1px]" />
              </div>
            ))}
          </div>

          {/* Bottom Gradient Effect */}
          <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-8 w-full bg-gradient-to-b from-primary/0 to-primary/50" />
        </div>
        <div className="box-6 col-span-4 row-span-1 max-lg:col-span-full max-lg:min-h-[5rem] bg-bison_hide border-bison_hide rounded-xl">
          <div className="flex size-full items-center justify-evenly gap-2">
            <a
              href="https://www.linkedin.com/in/sameersinghal26"
              target="_blank"
              rel="noopener noreferrer"
              className="flex overflow-hidden text-xl font-medium leading-[100%] text-gray-500 hover:text-[#06141B] hover:bg-gray-50 lg:hover:bg-transparent lg:p-0"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/SameerSinghal26"
              target="_blank"
              rel="noopener noreferrer"
              className="flex overflow-hidden text-xl font-medium leading-[100%] text-gray-500 hover:text-[#06141B] hover:bg-gray-50 lg:hover:bg-transparent lg:p-0"
            >
              Github
            </a>
            <a
              href="https://x.com/SameerS73068018"
              target="_blank"
              rel="noopener noreferrer"
              className="flex overflow-hidden text-xl font-medium leading-[100%] text-gray-500 hover:text-[#06141B] hover:bg-gray-50 lg:hover:bg-transparent lg:p-0"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
