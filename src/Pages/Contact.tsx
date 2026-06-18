import CallToAction from "../components/CallToAction";
import ContactForm from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Encart } from "../Layouts/Encart";
import { Phone, Mail } from 'lucide-react';
import Masonry from "../component/Masonry";
import { items } from "../data/masonry";

export default function Contact(){

    return (
        <>
            <Header />

            <Encart>
                <div className=" grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-2 p-8">
                    <div className="text-left w-full lg:w-1/2">
                        <div className="text-3xl font-bold text-white mb-4">
                            Contact
                        </div>
                        <p className="text-2xl font-normal text-white">
                            Abidjan, Cocody en face de l'église St-Jean
                        </p>
                    </div>
                    <div className="text-left w-full lg:w-auto">
                        <div className="text-3xl font-bold text-white text-left flex mb-2 align-baseline">
                            
                            <Phone size={32}/>
                             <div> &nbsp;: +225 07070707</div>
                        </div>
                        <div className="text-3xl font-bold text-white text-left flex align-baseline">
                            
                            <Mail size={40}/>
                             <div> &nbsp; : contact@saveur-africaine.ci</div>
                        </div>
                    </div>
                    <div className="text-left w-full lg:w-1/2">
                        <div className="text-3xl font-bold text-white text-left  mb-4">
                            Suivez nous
                        </div>
                        <div className="text-2xl font-light text-white text-left">
                            <ul className="list-none">
                                <li className="">Facebook</li>
                                <li className="">Instagram</li>
                                <li className="">Whatsapp</li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-left w-full lg:w-1/2">
                        <div className="mb-4 text-3xl font-bold text-white text-left">
                            Horaires
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="text-2xl font-light text-white text-left ">
                                <div className="mb-2 font-normal">Dejeuner</div>

                                <ul className="list-none font-light">
                                    <li className="">Lundi au Dimanche</li>
                                    <li className="">10h à 15h</li>
                                </ul>
                            </div>
                            <div className="text-2xl text-white text-left ">
                                <div className="mb-2 font-normal">Diner</div>

                                <ul className="list-none font-light">
                                    <li className="">Lundi au Dimanche</li>
                                    <li className="">17h à 23h</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </Encart>

            <Encart>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15890.049921112613!2d-3.9433508152646013!3d5.338441861845542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ed00fe2aa787%3A0x3f72627af0eb1065!2sWellbeing%20Resort!5e0!3m2!1sen!2sci!4v1781568986327!5m2!1sen!2sci" 
                width="100%" height="400" 
                loading="lazy" ></iframe>
            </Encart>

            <Encart>
                <div className="flex flex-row justify-center px-8 gap-8">
                    <div className="w-1/2 ">
                        <div className="text-left text-white font-bold text-3xl mb-2">
                            Titre Section
                        </div>
                        <p className="text-left  text-white text-xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dignissimos explicabo tempore. Numquam sint iure recusandae facere ratione dolor magni ipsa ullam odit dolorem, esse laborum atque illo suscipit repudiandae quos quod mollitia omnis at. Quos a vitae molestias exercitationem, ab culpa quaerat consequatur incidunt velit commodi iusto magnam eaque..
                        </p>
                    </div>
                    <div className="w-1/2">
                        <ContactForm /> 
                    
                    </div>
                </div>

            </Encart>


            <Encart>
                <div id="parallax" className="bg-[url(/img/image-2-darken.png)]  bg-center bg-cover bg-fixed py-30 flex justify-center">
                    <div className="w-5/6 flex justify-start xl:justify-end">
                        <div className="w-1/2 ">
                            <CallToAction soustitre="La spécialité du chef" titre="LE STEAK A POINT" text="Normal que ce soit sa specialite c'est ce qu'il aime manger le plus" btnlib="Commander" btnlink="#"/>
                        </div>
                    </div>
                </div>
            </Encart>

            <Encart>
                <div className="hidden sm:block">
                    <div className="text-white text-lg font-extrabold"> Faites la cuisine pas la guerre</div>
                    <div className='text-white text-6xl font-extrabold '>NOTRE GALERIE</div>
                    
                    <div className="sm:h-[800px] md:h-[800px] lg:h-[600px] py-25 w-full px-4">
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

            <Footer/>
        </>
    );
}