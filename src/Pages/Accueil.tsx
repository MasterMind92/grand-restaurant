import { Button } from "../components/Button";
import CallToAction from "../components/CallToAction";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Encart } from "../Layouts/Encart";
import Masonry from "../component/Masonry";
import { items } from "../data/masonry";
import { Plats } from "../components/Plats";
import PlatBis from "../components/PlatBis";
import { Plat } from "../components/Plat";









export default function Accueil() {
    return (
        <>
            <Header />

            <Encart>
                <div className="flex flex-col md:flex-row justify-center xl:justify-start pt-6">
                    <div className="md:w-1/2 p-4 pl-20">
                        <img src="/img/apropos.jpg" alt="" />
                    </div>

                    <div className="md:w-1/2 p-5 text-left flex flex-row pl-10 pr-20">
                        <div className="content-center">
                            <div className="text-white text-4xl uppercase font-extrabold">
                                Notre restaurant
                            </div>

                            <div className="text-[#ca9c5e] py-10 oleo-script-regular font-light text-1xl md:text-1xl lg:text-1xl transition ease-in-out">
                                Saveurs Côtières & Africaines valorise le patrimoine
                                gastronomique africain à travers des recettes authentiques,
                                des ingrédients soigneusement sélectionnés et un accueil
                                chaleureux, pour faire de chaque visite un véritable moment
                                de partage.
                            </div>

                            <Button
                                text="En savoir plus"
                                link=""
                                align="left"
                            />
                        </div>
                    </div>
                </div>
            </Encart>

            {/* 
            <div className="py-8 lg:py-18"></div>
            <Encart>
                <div className="flex flex-col md:flex-row justify-center px-10">
                    <div className="lg:w-2/3 xl:w-1/3 pb-8">
                        <CallToAction
                            soustitre="Y'a porc au four"
                            titre="NOTRE CHEF RECOMMANDE"
                            text="Lorem ipsum dolor sit amet consectetur"
                            btnlib="VOIR MENU"
                            btnlink="#"
                        />
                    </div>

                    <div className="hidden xl:block lg:w-1/2">
                        IMG TRANSPARENTE FLOTTANTE
                    </div>
                </div>
            </Encart>
            */}

            <div className="py-8 lg:py-12"></div>

            <Encart>
                <div
                    id="Carte"
                    className="text-white text-4xl font-extrabold uppercase mb-4"
                >
                    Nos entrées
                </div>

                <div className="text-white text-lg w-4/5 text-center mx-auto">
                    Bienvenue chez Saveurs Côtières & Africaines, votre destination
                    gourmande pour découvrir l’authenticité de la cuisine africaine
                    dans toute sa richesse. Notre restaurant vous invite à vivre une
                    expérience culinaire unique à travers des recettes traditionnelles
                    soigneusement préparées avec des ingrédients frais et sélectionnés
                    pour leur qualité.
                </div>

                <div className="flex flex-col items-center xl:flex-row xl:justify-center px-2 gap-4 lg:gap-5 lg:pt-8 pb-2">
                    <div className="w-3/4 xl:w-1/4">
                        <Plat
                            image="/img/entrees.jpg"
                            titre=""
                            libelle="Salade Crudités"
                            prix="4 000"
                            ingredient={[
                                "Laitue",
                                "Tomates fraîches",
                                "Concombres",
                            ]}
                            highlight="Nouveau"
                        />
                    </div>

                     <div className="w-3/4 xl:w-1/4">
                        <Plat
                            image="/img/entrees.jpg"
                            titre=""
                            libelle="Salade Crudités"
                            prix="4 000"
                            ingredient={[
                                "Laitue",
                                "Tomates fraîches",
                                "Concombres",
                            ]}
                            highlight="Nouveau"
                        />
                    </div>


                    

                    

                     <div className="w-3/4 xl:w-1/4">
                        <Plat
                            image="/img/entrees.jpg"
                            titre=""
                            libelle="Salade Crudités"
                            prix="4 000"
                            ingredient={[
                                "Laitue",
                                "Tomates fraîches",
                                "Concombres",
                            ]}
                            highlight="Nouveau"
                        />
                    </div>

                     <div className="w-3/4 xl:w-1/4">
                        <Plat
                            image="/img/entrees.jpg"
                            titre=""
                            libelle="Salade Crudités"
                            prix="4 000"
                            ingredient={[
                                "Laitue",
                                "Tomates fraîches",
                                "Concombres",
                            ]}
                            highlight="Nouveau"
                        />
                    </div>

                    
                </div>
            </Encart>

            <div className="py-4"></div>

            <div
                id="Carte"
                className="text-white text-4xl font-extrabold uppercase mb-4"
            >
                Nos grillades
            </div>
<div className="mx-auto w-4/4">

  <div className="w-3/4 mx-auto  ">
                <Plats
                    libelle="Poisson Braisé aux Épices du Continent"
                    prix="6 000 / 7 000 / 12 000"
                />
            </div>

            <div className="w-3/4 mx-auto mt-0">
                <Plats
                    libelle="Poulet Braisé Maguida"
                    prix="5 000 / 8 000"
                />
            </div>

            <div className="w-3/4 mx-auto mt-0">
                <Plats
                    libelle="Porc Braisé Façon Africaine"
                    prix="6 000"
                />
            </div>

            <div className="w-3/4 mx-auto mt-0">
                <Plats
                    libelle="Brochettes de Bœuf"
                    prix="5 000"
                />
            </div>

            <div className="w-3/4 mx-auto mt-0">
                <Plats
                    libelle="Brochettes d'Escargots"
                    prix="5 000"
                />
            </div>
        </div>
          
            <Encart>
                <div
                    id="parallax"
                    className="bg-[url(/img/image-2-darken.png)] bg-center bg-cover bg-fixed py-30 flex justify-center"
                >
                    <div className="w-5/6 flex justify-center xl:justify-end">
                        <div className="w-1/2">
                            <CallToAction
                                soustitre="La spécialité du chef"
                                titre="LE STEAK A POINT"
                                text="Normal que ce soit sa specialite c'est ce qu'il aime manger le plus"
                                btnlib="Commander"
                                btnlink="#"
                            />
                        </div>
                    </div>
                </div>
            </Encart>

            <div className="py-4"></div>

            <Encart>
                <div className="flex flex-col md:flex-row justify-center xl:justify-start">
                    <div className="md:w-1/2 p-5 pl-20 pr-10 text-left flex flex-row">
                        <div className="content-center">
                            <div className="text-white text-4xl uppercase font-extrabold">
                                Nous contacter
                            </div>

                            <div className="text-[#ca9c5e] py-10 oleo-script-regular font-light text-1xl md:text-1xl lg:text-1xl transition ease-in-out ">
                                Envie de découvrir les saveurs authentiques de l’Afrique dans une ambiance chaleureuse ? Contactez Saveurs Côtières & Africaines dès aujourd’hui et laissez-nous transformer vos repas en moments uniques de partage et de plaisir.
                            </div>

                            <Button
                                text="En savoir plus"
                                link=""
                                align="left"
                            />
                        </div>
                    </div>

                    <div className="md:w-1/2 p-4 pr-20">
                        <img src="/img/poulets.jpg" alt="" />
                    </div>
                </div>
            </Encart>

            
            <Encart>
                <div className="text-white text-lg font-extrabold">
                    Faites la cuisine pas la guerre
                </div>

                <div className="text-white text-6xl font-extrabold">
                    NOTRE GALERIE
                </div>
                
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
            </Encart>

            <Encart>
                
                <div className="grid grid-cols-2 grid-row-2 gap-4">
                    <div className="">
                        <PlatBis />
                    </div>
                    <div className="">
                        <PlatBis />
                    </div>
                    <div className="">
                        <PlatBis />
                        
                    </div>
                    <div className="">
                        <PlatBis />

                    </div>
                </div>
                
            </Encart>
            

            <Encart>
                <Footer />
            </Encart>
        </>
    );
}