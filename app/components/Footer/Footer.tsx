import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import { Reveal } from "../Reveal/Reveal";
import { footerData, footerSocialNetworks } from './Footer.data';

export function Footer() {
  return (
    <div className="p-6 mx-auto mt-10 md:-mt-50 bg-zinc-900"   >
   
    <div className="justify-around md:flex" >
    <div className="font-semibold"  >
           
         
          
    <div className="items-center justify-between md:flex" id="#contact">
       
    {/* links social */}
        <div className="flex gap-5">
            {footerSocialNetworks.map(({ id, icon, link }) => (
                <Link key={id} href={link} className="text-2xl">
                     <Image src={`/assets/${icon}.png`} alt="icono" width={30} height={30} />
                </Link>
            ))}
        </div>
    </div>
           
        </div>
        {footerData.map(({ id, title, links }) => (
            <div key={id}>
                <h4 className="mt-8 text-lg md:mt-0 text-white"><Reveal>{title}</Reveal></h4>
                {links.map(({ id, name, link }) => (
                    <Link key={id} href={link} className="block mt-4 text-lime-500 hover:text-white">
                        <Reveal>
                            {name}
                        </Reveal>
                    </Link>
                ))}
            </div>
        ))}
    </div>
    <div className="border-[#3F3E45] border-[0.8px] my-7" />

    <div className="my-5 text-white">
            <Reveal>
                2024 FullMENU. All Rights Reserved.
            </Reveal>
        </div>

</div>

  );
}
