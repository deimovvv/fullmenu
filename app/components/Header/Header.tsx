"use client";

import Link from "next/link";
import Image from "next/image"
import { dataHeader } from '../Header/Header.data';
import { useState } from "react";
import { MotionTransition } from "../MotionTransitions/MotionTransition"

export function Header() {
  
  const[openMobileMenu, setOpenMobileMenu] = useState(false)

  return (
    <MotionTransition className="">
      <nav className="flex flex-wrap justify-between items-center max-w-5xl p-4 mx-auto md:py-8  border-white">
        <Link href="/" className="flex items-center">
        <div className="text-2xl flex font-semibold" >
       <h1> FullMENU</h1> <p className="text flex-end p-2 text-lime-500 text-xs" >by coevo</p> 
        </div>
          {/* <Image
            src="/assets/logo.png"
            width="150"
            height="150"
            alt="logo fullmenu"
          /> */}
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-list block text-3xl md:hidden"
          viewBox="0 0 16 16"

          onClick={()=> setOpenMobileMenu(!openMobileMenu)}>
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
        <div className= {`${openMobileMenu ? "block" : "hidden cursor-pointer"} w-full md:block md:w-auto`}>
            <div className="flex flex-col p-4 mt-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                {dataHeader.map(({id, name, idLink}) => (
                  <div key={id} className="px-4 transition-all duration-500 ease-in-out">
                   <Link href={idLink} className="text-lg hover:text-lime-500">{name}</Link>

                  </div>
                ))}
            </div>

        </div>
      </nav>
    </MotionTransition>
  );
}
