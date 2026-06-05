import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


export default function SocialButtons(){

    const buttonClasses = "text-white font-bold text-lg font-bold px-2 py-1 transition duration-300";

    return (
      <>
        <Link to="http://facebook.com">
            <button className={buttonClasses}>  <FontAwesomeIcon icon={faFacebook}/></button>
        </Link>
        <Link to="http://instagram.com">
            <button className={buttonClasses}> <FontAwesomeIcon icon={faInstagram}/> </button>
        </Link>
        <Link to="http://whatsapp.com">
            <button className={buttonClasses}> <FontAwesomeIcon icon={faWhatsapp}/> </button>
        </Link>
      </>
    )
}