"use client";

import { useState } from "react";
import { MotionTransition } from "../MotionTransitions/MotionTransition"
import Link from '@/node_modules/next/link';
import {  footerSocialNetworks } from "../Footer/Footer.data"
import Image from "@/node_modules/next/image";


export function Header() {
  
  const [menuOpen , setMenuOpen] = useState(false)

  const handleNav = () => {
      setMenuOpen(!menuOpen)
  }

  return (
    <MotionTransition>
      <nav className="w-full h-24 shadow-xl bg-white">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
            
            
                <Link href="/">
                <div className="text-1xl flex font-semibold">
                    <h1>Full<span className="bg-lime-500">MENU</span></h1>
                </div>
                </Link>

                <div className="hidden sm:flex">
                    <ul className="hidden sm:flex">
                      <Link href="#themes"> 
                      <li className="ml-10 uppercase hover:border-b  text-sm">Plantillas</li> 
                      </Link>
                      <Link href="#features">
                          <li className="ml-10 uppercase hover:border-b text-sm">Funcionalidades</li> 
                          </Link>
                      <Link href="#contact"> 
                      <li className="ml-10 uppercase hover:border-b text-sm">Contacto</li>
                      </Link>
                    </ul>
                </div>

                <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
                <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-list block text-4 xl md:hidden"
          viewBox="0 0 16 16">
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
             
          />
        </svg>
                </div>
      
              </div>
    <div className={
      menuOpen 
      ? "fixed left-30 top-0 w-[65%] sm:hidden h-screen bg-blend-lighten[#73e8ae] p-10 ease-in  duration-500 z-10"
      : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
    }>
      <div className="flex w-full items-center justify-end ">
        <div onClick={handleNav} className="cursor-pointer">
          <h1 className="text-1xl m-0 p-0 text-white">x</h1>
        </div>
      </div>
      <div className="flex-col py-4">
                    <ul>
                      <Link href="#themes"> 
                      <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer  text-white">Plantillas</li> 
                      </Link>
                      <Link href="#features">
                          <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer text-white">Funcionalidades</li> 
                          </Link>
                      <Link href="#contact"> 
                      <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer text-white">Contacto</li>
                      </Link>
                    </ul>
                    <div className="flex-colum justify-around pt-10 items-center">
                    <div className="flex gap-5">
            {footerSocialNetworks.map(({ id, icon, link }) => (
                <Link key={id} href={link} className="text-2xl">
                     <Image src={`/assets/${icon}.png`} alt="icono" width={30} height={30}/>
                </Link>
            ))}
        </div>
                    </div>
                </div>

      </div>
            
        </nav>
    </MotionTransition>
  );
}
