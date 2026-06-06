
//Titre
// libelle
// prix
// tableau ingredient

import clsx from "clsx";

type element = {
    highlight?:string,
    titre:string,
    libelle:string,
    prix:string,
    ingredient:string[],
}
// revoir le highlight plus tard
export function Plat({highlight,titre,libelle,prix,ingredient}:element){
    
    return(
        <>
            <div 
                className={clsx( 
                    {
                        "border-2 text-left border-[#ca9c5e] rounded-xl":highlight
                    }
                )} 
                >

                {highlight && (<div className="bg-[#ca9c5e] text-white font-extrabold text-2xl pl-4 py-3 rounded-t-xl"> {highlight}</div> )}
                {titre && (<div className="text-white text-4xl  text-center lg:text-left py-4"> {titre}</div>)}
                <div className="p-4 ">
                    <div className="flex flex-row justify-between py-3">
                        <div className="text-[#ca9c5e] font-extrabold text-3xl ">
                            {libelle}
                        </div>
                        <div className="text-[#ca9c5e] font-extrabold text-3xl ml-2">
                            {prix} CFA
                        </div>
                    </div>
                    <div className="text-white text-xl  text-center sm:text-left">
                        {ingredient[0]} / {ingredient[1]} / {ingredient[2]}
                    </div>
                </div>
                

                <div className="t-box bg-white text-gray-700 text-lg absolute hidden">
                    <h2>
                        Informations du Menu
                    </h2>
                    <ul>
                        <li>Infos</li>
                        <li>Infos</li>
                        <li>Infos</li>
                        <li>Infos</li>
                    </ul>
                    <p>
                        NB: c'est bon attieke
                    </p>
                </div>
            </div>
        </>
    );
}