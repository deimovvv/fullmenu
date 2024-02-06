"use client"

import Link from "@/node_modules/next/link";
import { BackgroundRadialRigth } from "../BackgroundRadialRigth/BackgroundRadialRigth";
import { MotionTransition } from "../MotionTransitions/MotionTransition";
import Image from "@/node_modules/next/image";
import { Reveal } from "../Reveal/Reveal";
import { BackgroundRadialLeft } from '../BackgroundRadialLeft/BackgroundRadialLeft';


export function SectionModel(){
    return(
        <div className="relative p-4 md:py-40">
           {/* <BackgroundRadialRigth/> */}
           {/* <BackgroundRadialLeft/> */}
           <div className="grid max-w-5xl mx-auto md:grid-cols-2">
               <div>
                   <Reveal>
                   <h1 className="text-5xl font-semibold">
                     TU MENU DIGITAL!
                  <span className="block degradedBlue bg-lime-500">
                    
                   </span>
                   </h1>
                   </Reveal>
                   <Reveal>
                   <p className="max-w-md mt-10">
                      Muestra tus productos de una forma innovadora
                   </p>
                   </Reveal>
                   <div className="my-8">
                       <Link href="https://menu-coevo.vercel.app/" className="px-4 py-3 rounded-md bg-lime-500 shadow-lg shadow-zinc-500/50" target="blank">
                            VER
                       </Link>
                   </div>
               </div>
               <div>
               <MotionTransition className="flex items-center justify-center">
                   
                   <Image src="/assets/cocinero.png" width={450} height={400} className="h-auto w-72 md:w-full" priority={true} alt="cocinero" />
                  </MotionTransition>
               </div>
              
           </div>
        </div>
        )
    
}