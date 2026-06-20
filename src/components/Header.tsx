import { Navigation } from './Navigation'
import { Encart } from '../Layouts/Encart'
import CallToAction from './CallToAction';





export function Header(){
    // 
    return (
        <header 
      id='header-wrapper'
      className="w-full 
      bg-[url('/img/banniere2.jpg')]
      bg-cover bg-center
      border-0 border-[#0FF]
      h-lvh
      "
      >
        <Navigation/>

        <Encart>
          <div className="flex flex-row justify-center py-10">
            <div className="mx-auto md:w-3/4 lg:w-1/2 px-10">

              <CallToAction 
              soustitre="Bienvenue chez" 
              titre="Saveurs Côtières & Africaines" 
              text="Partagez des moments uniques autour de recettes africaines traditionnelles préparées avec passion et savoir-faire." 
              btnlib="EN SAVOIR PLUS" 
              btnlink='#' />

                {/* <div className="text-2xl text-[#ca9c5e] font-bold py-2">Sous-titre</div>
                <div className="text-6xl text-white py-2 font-extrabold ">Grand titre</div>
                <p className="text-lg text-white py-2 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo repudiandae odio amet ratione quae sunt.
                </p>

                <Button text="" link="#"/> */}
            </div>
        </div>
        </Encart>
        
      </header>
    );
}