import { Link } from "react-router-dom";



export default function NavButtons(){

    const buttonClasses = " px-8 text-white font-extrabold text-lg font-extrabold px-2 hover:bg-[#a27438]  py-1 transition duration-300";

    return (
      <>
      <Link to="/accueil" className={buttonClasses}>
        Accueil
      </Link>
      <Link to="/a-propos" className={buttonClasses}>
        A Propos
      </Link>
      <Link to="/contact" className={buttonClasses}>
        Contact
      </Link>
        
      </>
    )
}