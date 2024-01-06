import React from 'react';
import { Sections } from '@models/sections.model.ts';

interface ScrollNavInterface {}

const ScrollNav: React.FC<ScrollNavInterface> = () => {
  const navCircles = [
    {
      name: "Inicio",
      icon: (
        <svg
          className="size-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.3"
            d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"
          />
        </svg>
      ),
      href: `#${Sections.HOME}`,
      class: "top-7"
    },
    {
      name: "Proyectos",
      icon: (
        <svg
          class="size-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
          />
        </svg>
      ),
      href: `#${Sections.PROJECTS}`,
      class: "top-[90px]"
    },
    {
      name: "Sobre mi",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            stroke="none"
            d="M0 0h24v24H0z"
            fill="none"
          />
          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
          <path d="M9 17h6" />
          <path d="M9 13h6" />
        </svg>
      ),
      href: `#${Sections.ABOUT}`,
      class: "bottom-[90px]"
    },
    {
      name: "Contacto",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            stroke="none"
            d="M0 0h24v24H0z"
            fill="none"
          />
          <path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" />
          <path d="M10 16h6" />
          <path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M4 8h3" />
          <path d="M4 12h3" />
          <path d="M4 16h3" />
        </svg>
      ),
      href: `#${Sections.CONTACT}`,
      class: "bottom-7"
    },
  ]

  return (
    <div className="fixed right-2 top-1/2 -translate-y-1/2">
      <div className="relative w-[125px] flex flex-col justify-center items-center text-primary">
        <div className="w-[2px] h-[275px] bg-white rounded-lg"></div>
        {
          navCircles.map((circle) => (
            <div className={`group transition-width duration-200 text-nowrap absolute ${circle.class} size-[35px] bg-white rounded-full border border-[#ccc] flex justify-center items-center hover:w-auto hover:px-2.5 hover:right-11`}>
              <div className="">
                {circle.icon}
              </div>
              <div className="size-0 invisible opacity-0 group-hover:size-auto group-hover:visible group-hover:opacity-100 group-hover:ml-1">
                <a href={circle.href}>{circle.name}</a>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ScrollNav