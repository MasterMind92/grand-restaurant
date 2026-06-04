import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


export default function SocialButtons(){

    const buttonClasses = "text-white font-bold text-lg font-bold px-2 py-1 transition duration-300";

    return (
      <>
        <button className={buttonClasses}>  <FontAwesomeIcon icon={faFacebook}/></button>
        <button className={buttonClasses}> <FontAwesomeIcon icon={faInstagram}/> </button>
        <button className={buttonClasses}> <FontAwesomeIcon icon={faWhatsapp}/> </button>
      </>
    )
}