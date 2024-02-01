import { BackgroundRadialRigth } from "../BackgroundRadialRigth/BackgroundRadialRigth"
import Image from "@/node_modules/next/image"
import { dataClients } from "./clients.data"

export const SectionClients = () => {
  return (
    <div className="relative py-20 md:py-64" id="clientes">
        <BackgroundRadialRigth/>
        <div className="relative w-full overflow-hidden">
              <div className="flex">
              {dataClients.map(({ id, image }) => (
                    <div key={id} className="flex items-center">
                        <Image src="/assets/resto1.png" alt="resto" width="70" height="70" className="object-contain"/>
                    </div>
                ))}
            
           
            </div>  
           
        </div>
    </div>
  )
}
