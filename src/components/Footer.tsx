import { Link } from "react-router-dom";
import SocialLink from "./socialLink";
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export function Footer(){
    return (
        <footer className="py-15 w-full">
            <div className="flex flex-col md:flex-row justify-center flex-wrap">
                <div className="w-full md:w-1/3 flex justify-center items-center">
                    <div className="">
                        LOGO
                    </div>
                </div>
                <div className="w-full md:w-1/3 md:border-l-2 md:border-r-2 lg:border-[#ca9c5e] py-8 md:py-0">
                    <Link to="#Carte" className="text-white text-3xl font-extrabold mb-4 block">Notre Menu</Link>
                    <Link to="#" className="text-white text-3xl font-extrabold mb-4 block">Reservation</Link>
                    <Link to="#" className="text-white text-3xl font-extrabold mb-4 block">A Propos</Link>
                    <Link to="#" className="text-white text-3xl font-extrabold mb-4 block">Contactez nous</Link>
                </div>
                <div className="w-full md:w-1/3 flex justify-center items-center px-8">
                    <div>
                        <div className="py-4">
                            <SocialLink colored={true} link="http://facebook.com" icon={faFacebook} />
                            <SocialLink colored={true} link="http://instagram.com" icon={faInstagram} />
                            <SocialLink colored={true} link="http://whatsapp.com" icon={faWhatsapp} />
                        </div>
                        <div className="font-light text-white">
                            @Copyright MAD DEV Tous droits reservés
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}