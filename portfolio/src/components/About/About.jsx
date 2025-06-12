import React from 'react'

function About() {
  const technicalSkills = [
    { name: "JavaScript", category: "Languages" },
    { name: "React", category: "Frameworks" },
    { name: "Next.js", category: "Frameworks" },
    { name: "TypeScript", category: "Languages" },
    { name: "Git", category: "Tools" },
    { name: "GitHub", category: "Tools" },
    { name: "C++", category: "Languages" },
    { name: "Python", category: "Languages" },
    { name: "Java", category: "Languages" },
    { name: "VS Code", category: "Tools" },
    { name: "C", category: "Languages" },
    { name: "Bootstrap", category: "Frameworks" },
    { name: "Tailwind CSS", category: "Frameworks" },
    { name: "Node.js", category: "Technologies" },
    { name: "MongoDB", category: "Databases" },
    { name: "Appwrite", category: "Backend as a Service" },
    { name: "Express.js", category: "Frameworks" },
    { name: "CI/CD Pipeline", category: "DevOps" },
  ];

  return (
    <>
      <div className="col-span-8 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4">
        {/* Box 1: Introduction */}
        <div className="box-1 col-span-5 row-span-5 max-lg:col-span-8 max-md:col-span-full bg-bison_hide border-bison_hide rounded-xl py-1 p-8 flex flex-col justify-end">
          <h1 className="max-w-[37rem] pb-6 font-heading text-[2rem] font-normal leading-snug px-20">
            Hi, I'm Sameer Singhal
          </h1>
          <h2 className="max-w-[35rem] pb-8 font-heading text-[1rem] font-normal leading-snug">
            <span className="italic text-[1.5rem]">
              Pre-Final Year CSE Student & Full Stack Developer
            </span>{" "}
            Passionate about solving real-world problems through Data Structures, Algorithms, Development, and Competitive Programming. Currently pursuing Computer Science with a focus on building a strong foundation in modern software development and coding excellence.
          </h2>
        </div>

        {/* Box 2: Profile Image */}
        <div className="box-2 col-span-3 row-span-5 max-lg:col-span-4 max-md:col-span-full bg-armadillo border-armadillo rounded-xl">
          <img
            src="Profile_pic.png"
            fetchPriority="high"
            decoding="async"
            alt="profile_image"
            className="w-full object-full xl:p-8 xl:object-cover"
          />
        </div>

        {/* Box 3: About Me */}
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
              Over the past few months, I've been building a strong foundation in Data Structures, Algorithms, and Full Stack Web Development.
              <br />
              I thrive on tackling challenging problems and love turning ideas into real-world applications. I'm also enthusiastic about exploring new technologies, continuously learning, and growing as a developer.
              <br />
              Beyond the code, you'll often find me immersed in music 🎧, enjoying games 🎮, or diving into the latest tech trends.
              <br />
              Let's connect, code, and collaborate! 🚀
            </p>
          </div>
        </div>

        {/* Box 4: Location & Hobbies */}
        <div className="box-4 col-span-4 row-span-4 max-lg:col-span-6 max-lg:min-h-[20rem] max-md:col-span-full bg-armadillo border-armadillo rounded-xl relative overflow-hidden">
          <div className="flex size-full flex-col justify-between gap-4 p-5">
            <div>
              <h3 className="text-[#e5decd] text-xl font-semibold mb-3">Where I'm From</h3>
              <p className="text-[#e5decd] text-base">
                I'm from India 🇮🇳, a vibrant country with a rich culture and diverse landscapes. I enjoy exploring new places and experiencing different traditions.
              </p>
            </div>
            <div>
              <h3 className="text-[#e5decd] text-xl font-semibold mb-3">Hobbies</h3>
              <p className="text-[#e5decd] text-base">
                Beyond coding, I love immersing myself in music 🎧, enjoying games 🎮, and diving into the latest tech trends. I also enjoy reading and playing outdoor sports.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-4 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4">
        {/* Box 5: Technical Skills */}
        <div className="box-5 col-span-4 row-span-8 max-lg:col-span-full bg-bison_hide border-bison_hide rounded-xl overflow-y-auto">
          <div className="flex h-full flex-col p-6 gap-2">
            <div className="mb-4">
              <h3 className="font-heading text-xl font-semibold mb-3 text-[#06141B]">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.filter(skill => skill.category === 'Languages').map(skill => (
                  <span key={skill.name} className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium text-[#06141B] bg-armadillo border-[#06141B]">{skill.name}</span>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h3 className="font-heading text-xl font-semibold mb-3 text-[#06141B]">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.filter(skill => skill.category === 'Frameworks').map(skill => (
                  <span key={skill.name} className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium text-[#06141B] bg-armadillo border-[#06141B]">{skill.name}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-[#06141B]">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.filter(skill => skill.category === 'Tools' || skill.category === 'Technologies' || skill.category === 'Databases' || skill.category === 'Backend as a Service' || skill.category === 'DevOps').map(skill => (
                  <span key={skill.name} className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium text-[#06141B] bg-armadillo border-[#06141B]">{skill.name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Box 6: Social Links */}
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
  )
}

export default About