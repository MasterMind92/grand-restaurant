import CallToAction from "../components/CallToAction";
import { Plat } from "../components/Plat";
import SocialButtons from "../components/SocialButtons";
import { Encart } from "../Layouts/Encart";


export default function Accueil(){

    return (
        <>
            <Encart>
                <div className="flex flex-col md:flex-row md:justify-start">
                    <div className="md:w-1/3 p-4 ">
                        <img src="img/image-3.jpg" alt="" />
                    </div>
                    <div className="md:w-1/2 p-4 text-left flex flex-row">
                    <div className="content-center">
                        <div className="text-white text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, obcaecati?</div>
                        <div className="text-amber-600 text-xl md:text-3xl lg:text-4xl transition ease-in-out py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, accusantium. Officiis animi saepe pariatur nihil.</div>

                    </div>
                    </div>
                </div>
            </Encart>

            <Encart>
                <div className="flex flex-row justify-center px-10">
                <div className="w-1/3">
                    <CallToAction soustitre="Y'a porc au four" titre='NOTRE CHEF RECOMMANDE' text="Lorem ipsum dolor sit amet consectetur" btnlib="VOIR MENU" />
                </div>
                    
                <div className="w-1/2">
                    IMG TRANSPARENTE FLOTTANTE
                </div>
                </div>
            </Encart>
            <div className="py-24"></div>
            <Encart>
                    <div className="text-white text-lg font-bold"> Faites la cuisine pas la guerre</div>
                    <h1 className='text-white text-6xl font-bold '>NOTRE MENU</h1>
                    
                    <div className="flex  flex-col items-center xl:flex-row xl:justify-center px-10 gap-4 lg:gap-16 lg:py-8">
                        <div className="w-3/4   xl:w-1/3 ">
                            <Plat titre='ATTIEKE POISSON DE LA TANTIE' libelle='Attieke Poisson' prix='2500' ingredient={['Attieke','Poisson Fume','Piment']}/>
                            <Plat titre='' libelle='Attieke Poisson' prix='2500' ingredient={['Attieke','Poisson Fume','Piment']}/>
                            <Plat titre='' libelle='Attieke Poisson' prix='2500' ingredient={['Attieke','Poisson Fume','Piment']}/>
                        </div>
                        <div className="w-3/4   xl:w-1/3 ">
                            <Plat titre='ATTIEKE POISSON DE LA TANTIE' libelle='Attieke Poisson' prix='2500' ingredient={['Attieke','Poisson Fume','Piment']}/>
                            <Plat titre='' libelle='Attieke Poisson' prix='2500' ingredient={['Attieke','Poisson Fume','Piment']}/>
                            <Plat titre='' libelle='Attieke Poisson' prix='2500' ingredient={['Attieke','Poisson Fume','Piment']}/>
                        </div>
                    </div>
            </Encart>
            <div className="py-10"></div>
            <Encart>
                <div className="bg-[url(img/image-2.jpg)] bg-center bg-cover bg-fixed py-60 flex justify-center">
                    <div className="w-5/6 flex justify-center xl:justify-end">
                        <div className="w-1/2">
                            <CallToAction soustitre="La spécialité du chef" titre="LE STEAK A POINT" text="Normal que ce soit sa specialite c'est ce qu'il aime manger le plus" btnlib="Commander" />
                        </div>
                    </div>
                </div>
            </Encart>
                <div className="py-10"></div>
            <Encart>
                    <div className="text-white text-lg font-bold"> Faites la cuisine pas la guerre</div>
                    <h1 className='text-white text-6xl font-bold '>NOTRE GALERIE</h1>

                    <div className="grid xl:grid-cols-3 md:grid-cols-2 xl:grid-row-2 md:grid-row-3 gap-8 p-8">
                        <div className="">
                            <img src="img/image-1.jpg" alt="" />
                        </div>
                        <div className="">
                            <img src="img/image-2.jpg" alt="" />
                        </div>
                        <div className="">
                            <img src="img/image-1.jpg" alt="" />
                        </div>
                        <div className="">
                            <img src="img/image-3.jpg" alt="" />
                        </div>
                        <div className="">
                            <img src="img/image-1.jpg" alt="" />
                        </div>
                        <div className="">
                            <img src="img/image-2.jpg" alt="" />
                        </div>
                    </div>

            </Encart>
            
            <Encart>

            <footer className="py-15 w-full">
                    <div className="flex flex-col md:flex-row justify-center flex-wrap">
                        <div className="w-full md:w-1/3 flex justify-center items-center">
                            <div className="">
                                LOGO
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 border-l-2 border-r-2 border-[#ca9c5e] py-8 md:py-0">
                            <div className="text-white text-3xl font-bold">Notre Menu</div>
                            <div className="text-white text-3xl font-bold">Reservation</div>
                            <div className="text-white text-3xl font-bold">A Propos</div>
                            <div className="text-white text-3xl font-bold">Contactez nous</div>
                        </div>
                        <div className="w-full md:w-1/3 flex justify-center items-center px-8">
                            <div>
                                <SocialButtons></SocialButtons>
                                <div className="font-light text-white">
                                    @Copyright MAD DEV Tous droits reservés
                                </div>
                            </div>
                        </div>
                    </div>
            </footer>
            </Encart>
        </>
    );
}