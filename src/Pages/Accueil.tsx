import CallToAction from "../components/CallToAction";
import { Footer } from "../components/Footer";
import { Plat } from "../components/Plat";
import { Encart } from "../Layouts/Encart";



export default function Accueil(){

    return (
        <>  
            <div className="py-8 lg:py-10"></div>
            <Encart>
                <div className="flex flex-col md:flex-row justify-center xl:justify-start px-8">
                    <div className="md:w-1/2 p-4 ">
                        <img src="/img/image-3.jpg" alt="" />
                    </div>
                    <div className="md:w-1/2 p-4 text-left flex flex-row">
                    <div className="content-center">
                        <div className="text-white text-2xl">Lorem ipsum dolor sit amet </div>
                        <div className="text-[#ca9c5e] oleo-script-regular font-light text-2xl md:text-4xl lg:text-5xl transition ease-in-out py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, accusantium. Officiis animi saepe pariatur nihil.</div>

                    </div>
                    </div>
                </div>
            </Encart>
            <div className="py-8 lg:py-24"></div>
            {/* <Encart>
                <div className="flex flex-col md:flex-row justify-center px-10">
                <div className="lg:w-2/3 xl:w-1/3 pb-8">
                    <CallToAction soustitre="Y'a porc au four" titre='NOTRE CHEF RECOMMANDE' text="Lorem ipsum dolor sit amet consectetur" btnlib="VOIR MENU" btnlink="#"/>
                </div>
                    
                <div className="hidden xl:block lg:w-1/2">
                    IMG TRANSPARENTE FLOTTANTE
                </div>
                </div>
            </Encart> */}
            <div className="py-8 lg:py-24"></div>
            <Encart>
                    <div className="text-white text-lg font-extrabold"> Faites la cuisine pas la guerre</div>
                    <h1 id="Carte" className='text-white text-6xl font-extrabold'>Notre Menu</h1>
                    
                    <div className="flex  flex-col items-center xl:flex-row xl:justify-center px-2 gap-4 lg:gap-16 lg:py-8">
                        <div className="w-3/4   xl:w-1/3 ">
                            <Plat titre='ATTIEKE POISSON DE LA TANTIE' libelle='Attieke Poisson' prix='2500' ingredient={['Attieke','Poisson Fume','Piment']}/>
                            <Plat titre='' libelle='Attieke Poisson' prix='2500' ingredient={['Attieke','Poisson Fume','Piment']} highlight="Nouveau"/>
                            <Plat titre='' libelle='Attieke Poisson' prix='2500' ingredient={['Attieke','Poisson Fume','Piment']}/>
                        </div>
                        <div className="w-3/4   xl:w-1/3 ">
                            <Plat titre='ATTIEKE POISSON DE LA TANTIE' libelle='Attieke Poisson' prix='2500' ingredient={['Attieke','Poisson Fume','Piment']}/>
                            <Plat titre='' libelle='Attieke Poisson' prix='2500' ingredient={['Attieke','Poisson Fume','Piment']} highlight="Bio"/>
                            <Plat titre='' libelle='Attieke Poisson' prix='2500' ingredient={['Attieke','Poisson Fume','Piment']}/>
                        </div>
                    </div>
            </Encart>
            <div className="py-10"></div>
            <Encart>
                <div id="parallax" className="bg-[url(/img/image-2-darken.png)]  bg-center bg-cover bg-fixed py-30 flex justify-center">
                    <div className="w-5/6 flex justify-center xl:justify-end">
                        <div className="w-1/2 ">
                            <CallToAction soustitre="La spécialité du chef" titre="LE STEAK A POINT" text="Normal que ce soit sa specialite c'est ce qu'il aime manger le plus" btnlib="Commander" btnlink="#"/>
                        </div>
                    </div>
                </div>
            </Encart>
                <div className="py-10"></div>
            {/* <Encart>
                    <div className="text-white text-lg font-extrabold"> Faites la cuisine pas la guerre</div>
                    <h1 className='text-white text-6xl font-extrabold '>NOTRE GALERIE</h1>

                    <div className="grid xl:grid-cols-3 md:grid-cols-2 xl:grid-row-2 md:grid-row-3 gap-8 p-8">
                        <div className="">
                            <img src="/img/image-1.jpg" alt="" />
                        </div>
                        <div className="">
                            <img src="/img/image-2.jpg" alt="" />
                        </div>
                        <div className="">
                            <img src="/img/image-4.jpg" alt="" />
                        </div>
                        <div className="">
                            <img src="/img/image-3.jpg" alt="" />
                        </div>
                        <div className="">
                            <img src="/img/image-5.jpg" alt="" />
                        </div>
                        <div className="">
                            <img src="/img/image-2.jpg" alt="" />
                        </div>
                    </div>

            </Encart> */}
            
            <Encart>
                <Footer />
            </Encart>
        </>
    );
}