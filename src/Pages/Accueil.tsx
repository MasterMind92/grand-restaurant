import CallToAction from "../components/CallToAction";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Plat } from "../components/Plat";
import { Encart } from "../Layouts/Encart";
import Masonry from "../component/Masonry";
import { items } from "../data/masonry";







export default function Accueil(){

    return (
        <>  
            <Header />
            <div className="py-8 lg:py-10"></div>
            <Encart>
                <div className="flex flex-col md:flex-row justify-center xl:justify-start px-8">
                    <div className=" md:w-1/3 overflow-clip p-4 ">
                        <img src="/img/image-7.jpg" className="h-[28rem]" alt="" />
                    </div>
                    <div className="md:w-2/3 p-4 text-left flex flex-row">
                        <div className="content-center">
                            <div className="text-white text-2xl">POULET MARINÉ AUX ÉPICE LOCALES </div>
                            <div className="text-white text-xl">La rencontre entre l’Asie et l'Afrique </div>
                            <div className="text-[#ca9c5e] oleo-script-regular font-light text-2xl md:text-3xl lg:text-4xl transition ease-in-out py-2">
                                *Du Poulet sauté, <br /> *Des épices 100% africaines pour la marinade <br /> *Du riz cantonais préparé façon japonaise
                            </div>

                        </div>
                    </div>
                </div>
            </Encart>
            {/* <div className="py-8 lg:py-18"></div>
            <Encart>
                 <div className="flex flex-col md:flex-row justify-center px-10">
                <div className="lg:w-2/3 xl:w-1/3 pb-8">
                    <CallToAction soustitre="Y'a porc au four" titre='NOTRE CHEF RECOMMANDE' text="Lorem ipsum dolor sit amet consectetur" btnlib="VOIR MENU" btnlink="#"/>
                </div>
                    
                <div className="hidden xl:block lg:w-1/2">
                    IMG TRANSPARENTE FLOTTANTE
                </div>
                </div>
            </Encart> */}
            <div className="py-8 lg:py-12"></div>
            <Encart>
                    <div className="text-white text-lg font-extrabold"> Faites la cuisine pas la guerre</div>
                    <div id="Carte" className='text-white text-6xl font-extrabold'>Notre Menu</div>
                    
                    <div className="flex  flex-col items-center xl:flex-row xl:justify-center px-2 gap-4 lg:gap-16 lg:py-8">
                        <div className="w-3/4   xl:w-1/3 ">
                            
                            <Plat 
                            titre='Nos Plats à Partager' 
                            libelle='Grilladass Grando' 
                            prix='12 000' 
                            ingredient={[
                                '2 brochettes de bœuf',
                                '2 brochettes d’escargots',
                                '2 pilons de poulet'
                            ]}
                            />
                            <Plat 
                            titre='' 
                            libelle='Grilladass Normal' 
                            prix='8 500' 
                            ingredient={['Attieke','Poisson Fume','Piment']} 
                            highlight="Nouveau"/>
                            <Plat 
                            titre='' 
                            libelle='Attieke Poisson' 
                            prix='2500' 
                            ingredient={['Attieke','Poisson Fume','Piment']}/>
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
                <div className="md:py-10"></div>
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