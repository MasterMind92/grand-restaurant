import CallToAction from "../components/CallToAction";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import NavButtons from "../components/NavButtons";
import { Navigation } from "../components/Navigation";
import { Encart } from "../Layouts/Encart";




export default function Apropos(){
    return (
        <>
            {/* <Header image="/img/image-2.png"/> */}

            <div className="w-full 
                bg-[url('/img/restau-01.jpeg')]
                bg-cover bg-center
                border-12 border-[#ca9c5e]
                h-lvh
                ">
                <Navigation/>
                <div className="container flex justify-center content-center">
                    <div className="py-20">
                        <div className="text-white text-3xl">
                            plus de gout pour moins
                        </div>
                        <div className="text-white text-8xl font-extrabold py-4">
                            Bonne nourriture, <br /> Bonne ambiance
                        </div>
                    </div>
                </div>

            </div>
            <div className="py-8 lg:py-10"></div>
            <Encart>
                <div className="py-4">
                    {/* <h1 className="text-white text-2xl font-bold">A LA UNE</h1> */}
                    <div className="text-white text-lg font-extrabold"> Faites la cuisine pas la guerre</div>
                    <h1 id="Carte" className='text-white text-6xl font-extrabold'>A LA UNE</h1>
                    
                </div>
                <div className="flex flex-col md:flex-row md:justify-center ">
                    <div className="w-full md:w-1/3 p-4">
                        <Card />
                    </div>
                    <div className="w-full md:w-1/3 p-4">
                        <Card />
                    </div>
                    <div className="w-full md:w-1/3 p-4">
                        <Card />
                    </div>
                </div>
            </Encart>
            <div className="py-8 lg:py-10"></div>
            <Encart>
                <div id="parallax" className="bg-[url(/img/image-2-darken.png)]  bg-center bg-cover bg-fixed py-30 flex justify-center">
                    <div className="w-5/6 flex justify-center xl:justify-end">
                        <div className="w-1/2 ">
                            <CallToAction soustitre="La spécialité du chef" titre="LE STEAK A POINT" text="Normal que ce soit sa specialite c'est ce qu'il aime manger le plus" btnlib="Commander" btnlink="#"/>
                        </div>
                    </div>
                </div>
            </Encart>
            
            <Encart>
                <Footer />
            </Encart>

            
        </>
    );
}