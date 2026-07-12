import { Link } from "react-router-dom";



export default function NavButtons(){

    const buttonClasses = " px-4 text-white font-extrabold text-md font-extrabold hover:bg-[#a27438]  py-1 transition duration-300";

    return (
      <>
      <Link to="/accueil" className={buttonClasses}>
        Accueil
      </Link>
      <Link to="/apropos" className={buttonClasses}>
        A Propos
      </Link>
      <Link to="/menus" className={buttonClasses}>
        Nos Menus
      </Link>
      <Link to="/reservation" className={buttonClasses}>
        Reservation
      </Link>
      <Link to="/contact" className={buttonClasses}>
        Contact
      </Link>
        
      </>
    )
}