import { useState } from 'react'
import NavButtons from "./NavButtons"
import SocialLink from './SocialLink';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


export function Navigation(){

    const [isOpen,setIsOpen] = useState(false);

    return(
        <>
            
            <nav className='text-white 
            w-full bg-[#ca9c5e]
            md:bg-gray-500/20'>
            <div className='max-w-7xl mx-auto 
            px-4 sm:px-6 lg:px-8
            '>
                <div className="flex items-center justify-between h-20">
                    <div className="flex flex-row w-full justify-between">

                    <div className="text-xl font-extrabold order-1">
                        Brand name
                    </div>
                    <div className="hidden md:block order-2 md:order-2">
                        <div className="flex ml-10 items-baseline space-x-2">
                        <NavButtons/>
                        </div>

                    </div>
                    <div className="block items-center md:items-end order-2">
                        <div className="flex ml-10 items-baseline space-x-2">
                        <SocialLink colored={false} link="http://facebook.com" icon={faFacebook} />
                        <SocialLink colored={false} link="http://instagram.com" icon={faInstagram} />
                        <SocialLink colored={false} link="http://whatsapp.com" icon={faWhatsapp} />
                        </div>

                    </div>

                    </div>
                    <div className='md:hidden'>
                        <button type="button" onClick={()=>{setIsOpen(!isOpen)}}>
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="#ffffff" 
                        stroke-width="2" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        className ="lucide lucide-menu-icon lucide-menu">
                            <path d="M4 5h16"/>
                            <path d="M4 12h16"/>
                            <path d="M4 19h16"/>
                        </svg>
                        </button>
                    </div>
                </div>
                
            </div>
            {
                isOpen &&(
                <div className="
                flex flex-col gap-y-2 
                md:hidden px-4 
                sm:px-6 pb-2 
                bg-[#ca9c5e]" >
                    <NavButtons/>
                </div>
                )
            }
            </nav>
        
        </>
        
    );

    

}