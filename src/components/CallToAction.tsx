import { Button } from "./Button";

type parametres = {
    soustitre:string,
    titre:string,
    text:string,
    btnlib:string,
}

export default function CallToAction({soustitre,titre,text,btnlib}:parametres){
    return (
        <>
            <div className="text-white text-xl">
                {soustitre}
            </div>
            <div className="text-white text-4xl font-bold py-4">
               
                {titre}
            </div>
            <div className="text-white text-2xl py-4">
                {text}
             </div>
            <Button text={btnlib}/>
        </>
    );

}