
import CallToAction from "../components/CallToAction";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { Encart } from "../Layouts/Encart";
import Masonry from "../component/Masonry";
import { items } from "../data/masonry";




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
                        <div className="text-white text-5xl lg:text-8xl font-extrabold py-4">
                            Bonne nourriture, <br /> Bonne ambiance
                        </div>
                    </div>
                </div>

            </div>

            <div className="py-4 lg:py-8"></div>
            <Encart>
                <div className="text-center text-white">
                    <h4 className="text-2xl">Sous titre</h4>
                    <div className="text-6xl p-2 pb-8">Grand Titre</div>
                </div>
                <div className="flex flex-col md:flex-row gap-8 p-4 justify-center">
                    <div className=" w-full md:w-1/3">
                        <img src="/img/restau-01.jpeg" alt="" />
                    </div>
                    <div className="text-2xl text-white text-left w-full md:w-1/3">
                        
                        <p className="py-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ducimus exercitationem, laboriosam voluptatem in eaque, non quisquam veritatis optio quas nemo molestias totam eos laudantium!
                        </p>
                    </div>

                </div>
            </Encart>
            <div className="py-8 lg:py-4"></div>

            <Encart>
                <div id="parallax" className="bg-[url(/img/image-2-darken.png)]  bg-center bg-cover bg-fixed py-30 flex justify-center">
                    <div className="w-5/6 flex justify-center xl:justify-end">
                        <div className="w-full lg:w-1/2 ">
                            <CallToAction soustitre="La spécialité du chef" titre="LE STEAK A POINT" text="Normal que ce soit sa specialite c'est ce qu'il aime manger le plus" btnlib="Commander" btnlink="#"/>
                        </div>
                    </div>
                </div>
            </Encart>
            <div className="py-8 lg:py-4"></div>
            <Encart>
                <div className="py-4">
                    {/* <h1 className="text-white text-2xl font-bold">A LA UNE</h1> */}
                    <div className="text-white text-lg font-extrabold"> Faites la cuisine pas la guerre</div>
                    <div id="Carte" className='text-white text-6xl font-extrabold'>A LA UNE</div>
                    
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
                <div className="hidden sm:block">
                    <div className="text-white text-lg font-extrabold"> Faites la cuisine pas la guerre</div>
                    <div className='text-white text-6xl font-extrabold '>NOTRE GALERIE</div>
                    
                    <div className="sm:h-200 md:h-200 lg:h-150 py-25 w-full px-4">
                        <Masonry
                            items={items}
                            ease="power3.out"
                            duration={1.2}
                            stagger={0.05}
                            animateFrom="bottom"
                            scaleOnHover
                            hoverScale={0.95}
                            blurToFocus
                            colorShiftOnHover={false}
                        />
                    </div>
                </div>

            </Encart>
            <Encart>
                <Footer />
            </Encart>

            
        </>
    );
}