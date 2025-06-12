import React from 'react'
import { projects } from "../Project";

function Project() {
  return (
    <div className="col-span-12 row-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full h-full">
      {projects.map((project, idx) => (
        <div
          key={project.title}
          className={`${idx % 2 === 0 ? "bg-bison_hide border-bison_hide" : "bg-armadillo border-armadillo"} row-span-12 text-card-foreground flex flex-col gap-1.5 border py-6 shadow-sm relative rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300`}
        >
          {/* Card header - Fixed at top */}
          <div className="flex items-center justify-between px-6 sticky top-0 bg-inherit z-10">
            <div className="leading-none font-semibold text-xl">{project.title}</div>
            <div className="flex gap-2">
              {/* GitHub Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md w-8 h-8 hover:bg-accent transition"
                title="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5" strokeWidth={2}>
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              {/* External Link Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md w-8 h-8 hover:bg-accent transition"
                title="Open Project"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5" strokeWidth={2}>
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto no-scrollbar">
            <div className='font-semibold px-7'>
              {project.content}
            </div>
            {/* Card content (image) */}
            <div className="px-6 relative w-full mt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-[full] w-full overflow-hidden rounded-[16px] bg-secondary"
              >
                <img
                  alt={project.title}
                  src={project.image}
                  className="object-fill transition-transform duration-700 ease-out hover:scale-105"
                />
              </a>
            </div>
            {/* Technology badges */}
            <div className={`flex gap-x-2 items-center px-6 pt-6 overflow-x-auto whitespace-nowrap gap-1 mr-5 mb-2 no-scrollbar`}>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`${idx % 2 === 1 ? " border-bison_hide" : " border-armadillo"} inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Project