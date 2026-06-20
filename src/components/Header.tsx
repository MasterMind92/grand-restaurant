import { Navigation } from './Navigation'
import { Encart } from '../Layouts/Encart'





export function Header(){
    // 
    return (
        <header 
      id='header-wrapper'
      className="w-full 
      bg-[url('/img/restau-01.jpeg')]
      bg-cover bg-center
      border-12 border-[#ca9c5e]
      h-lvh
      "
      >
        <Navigation/>

        <Encart>
          <div className="flex flex-row justify-center py-10">
            <div className="mx-auto md:w-3/4 lg:w-1/2 px-10">

              {/* <CallToAction 
              soustitre="" 
              titre="" 
              text="Toute la saveur des plats Africains à déguster découvrir un cadre convivial et une ambiance chaleureuse." 
              btnlib="" 
              btnlink='#' /> */}

                <div className="text-2xl text-[#ca9c5e] font-bold py-2"></div>
                <div className="text-2xl text-white py-2 font-extrabold pt-40">
                  Toute la saveur des plats Africains à déguster découvrir un cadre convivial et une ambiance chaleureuse.
                </div>
                {/* <p className="text-xl text-white py-2 ">
                 Toute la saveur des plats Africains à déguster découvrir un cadre convivial et une ambiance chaleureuse.
                </p> */}

                {/* <Button text="" link="#"/> */}
            </div>
        </div>
        </Encart>
        
      </header>
    );
}