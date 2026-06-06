import { Button } from "./Button";

type parametres = {
    soustitre:string,
    titre:string,
    text:string,
    btnlib:string,
    btnlink:string,
}

export default function CallToAction({soustitre,titre,text,btnlib ,btnlink}:parametres){
    return (
        <>
            <div className="text-white text-xl">
                {soustitre}
            </div>
            <div className="text-white text-4xl font-extrabold py-4">
               
                {titre}
            </div>
            <div className="text-white text-2xl py-4 mb-6">
                {text}
             </div>
            <Button text={btnlib} link={btnlink}/>
        </>
    );

}