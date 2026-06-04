
//Titre
// libelle
// prix
// tableau ingredient

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
            <div className="" >
                {
                    titre && (<div className="text-white text-4xl oswald-400 text-center lg:text-left py-4"> {titre}</div>)
                }
                
                <div className="flex flex-row justify-between py-3">
                    <div className="text-[#ca9c5e] font-bold text-3xl ">
                        {libelle}
                    </div>
                    <div className="text-[#ca9c5e] font-bold text-3xl ">
                        {prix} CFA
                    </div>
                </div>
                <div className="text-white text-xl oswald-400 text-left">
                    {ingredient[0]} / {ingredient[1]} / {ingredient[2]}
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