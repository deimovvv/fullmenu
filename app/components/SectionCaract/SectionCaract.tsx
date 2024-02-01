import Link  from "@/node_modules/next/link";
import Image from "@/node_modules/next/image";
/* import { BackgroundRadialLeft } from "../BackgroundRadialLeft/BackgroundRadialLeft"; */
import { Reveal } from "../Reveal/Reveal";
import { dataFeatures } from "./SectionCaractdata";
/* import { bgWhite } from "@/../../../node_modules/colors/index"; */


export function SectionCaract(){
    return(
        <div className="relative px-6 bg-zinc-900 py-20 md:py-10" id="features">
          {/*   <BackgroundRadialLeft/> */}
            <div className="grid max-w-5xl mx-auto md:grid-cols-2">
            <div>
                <Reveal>
                    <h2 className="text-5xl font-semibold">
                        <span className="block degradedBlue bg-lime-500">
                        ¿Que puedo hacer con Full menu?
                        </span>
                    </h2>
                </Reveal>
               
                <Reveal>
                  <div className="my-8">
                    <Link href="#features" className="px-4 py-3 rounded-md bg-lime-500">Elige tu Estilo</Link>
                  </div>
                </Reveal>
            </div>

            <div className="grid items-center py-5 md:p-8">
                {dataFeatures.map(( icon,title, description}) =>(
                    <Reveal>
                        <div className="grid grid-flow-col gap-5 px-4 py-2 rounded-3xl group hover:bg-blueRadialBlack">
                        <Image src={`/assets/${icon}.png`} alt={title} width={40} height={40} color={"bgwhite"} />
                        </div>
                        <div>
                            <h4 className="text-lime-500">
                                {title}
                            </h4>
                            <p  className="text-slate-50">
                              {description}  
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>
            </div>
         </div>
    )
}