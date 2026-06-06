import { Navigation } from './Navigation'
import { Encart } from '../Layouts/Encart'
import { Button } from './Button';


export function Header(){
    
    return (
        <header 
      id='header-wrapper'
      className="w-full 
      bg-[url('img/image-5-darken.png')]
      bg-cover bg-center
      border-12 border-[#ca9c5e]
      "
      >
        <Navigation/>

        <Encart>
          <div className="flex flex-row justify-center py-30">
            <div className="mx-auto md:w-3/4 lg:w-1/2 px-10">
                <div className="text-2xl text-[#ca9c5e] font-bold py-2">Sous-titre</div>
                <div className="text-6xl text-white py-2 font-extrabold ">Grand titre</div>
                <p className="text-lg text-white py-2 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo repudiandae odio amet ratione quae sunt.
                </p>

                <Button text="EN SAVOIR PLUS" link="#"/>
            </div>
        </div>
        </Encart>
        
      </header>
    );
}