"use client";

import "swiper/css";
import "swiper/css/effect-cards";
import { MotionTransition } from "../MotionTransitions/MotionTransition";
import { Reveal } from "../Reveal/Reveal";
import { dataThemes } from "./SectionThemes.data";
import Image from "@/node_modules/next/image";
import Link from '@/node_modules/next/link';

export function SectionThemes() {
  return (
    <div className="relative px-6 py-10 md:py-40" id="themes">
      {/* <BackgroundRadialRigth /> */}
      <div className="block max-w-5xl mx-auto">
        <Reveal>
          <h2 className="text-5xl font-semibold">
              Nuestras<span className="degradedBlue bg-lime-400"> plantillas</span>
              </h2>
          
          <div className="px-8">
           <MotionTransition  className="grid grid-cols-2 items-center justify-around gap-7">
               {dataThemes.map(({ image, id }) => (
                <div key={id}>
                  <Image src={image} alt="Themes" width="600" height="600"  className=""/>
                </div>
              ))}
               {/*  <Link href="#themes" className="px-7 py-3 rounded-md bg-lime-500 shadow-lg shadow-lime-500/50">Ver demo</Link>
                <Link href="#themes" className="px-4 py-3 rounded-md bg-lime-500 shadow-lg shadow-lime-500/50">Ver demo</Link> */}
            </MotionTransition>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
