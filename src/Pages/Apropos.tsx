import CallToAction from "../components/CallToAction";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Encart } from "../Layouts/Encart";


export default function Apropos(){
    return (
        <>
            {/* <Header image="/img/image-2.png"/> */}

            <div className="py-8">

            </div>
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
                <div id="masonry" className="w-1/3 overflow-hidden h-48">
                    <img src="/img/image-3.jpg" alt=""  />
                </div>

            </Encart>
            
            <Encart>
                <Footer />
            </Encart>

            
        </>
    );
}