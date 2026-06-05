import { Navigation } from './Navigation'
import { Encart } from '../Layouts/Encart'

export function Header(){
    
    return (
        <header 
      id='header-wrapper'
      className="w-full 
      bg-cover bg-center"
      >
        {/* bg-[url('/img/image-1.jpg')] */}
        <Navigation/>

        <Encart>
          <div className="flex flex-row justify-center py-30">
            <div className="mx-auto md:w-3/4 lg:w-1/2 px-10">
                <div className="text-2xl text-amber-800 font-bold py-2">Sous-titre</div>
                <div className="text-6xl text-white py-2 font-bold">Grand titre</div>
                <p className="text-lg text-white py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo repudiandae odio amet ratione quae sunt.
                </p>

                <button type='button' className="border-t-4 
                border-b-4 border-b-amber-600 border-t-amber-600 px-8 py-4 my-4
                text-white font-bold hover:bg-amber-600
                transition-all  duration-500 
                 ">
                  EN SAVOIR PLUS
                </button>
            </div>
        </div>
        </Encart>
        
      </header>
    );
}