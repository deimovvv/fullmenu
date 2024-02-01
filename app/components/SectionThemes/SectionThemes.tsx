"use client";

import "swiper/css";
import "swiper/css/effect-cards";
import { BackgroundRadialRigth } from "../BackgroundRadialRigth/BackgroundRadialRigth";
import { MotionTransition } from "../MotionTransitions/MotionTransition";
import { Reveal } from "../Reveal/Reveal";
import { dataThemes } from "./SectionThemes.data";
import Image from "@/node_modules/next/image";

export function SectionThemes() {
  return (
    <div className="relative px-6 py-20 md:py-40" id="themes">
      {/* <BackgroundRadialRigth /> */}
      <div className="block max-w-5xl mx-auto">
        <Reveal>
          <h2 className="text-5xl font-semibold">
              Nuestros
              <span className="block degradedBlue bg-lime-500"> estilos</span>
              </h2>
          
          <div className="px-5">
           <MotionTransition  className="grid grid-cols-2 items-center justify-between gap-4">
               {dataThemes.map(({ image, id }) => (
                <div key={id}>
                  <Image src={image} alt="Themes" width="600" height="600" />
                </div>
              ))}
            </MotionTransition>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
