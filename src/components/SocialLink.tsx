import clsx from "clsx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type params = {
    colored:boolean,
    icon:any,
    link:string
}

export default function SocialLink({colored,icon,link}:params){

    return (
    <>
        <Link to={link}>
            <button className={clsx(
                "font-extrabold px-2 py-1 transition duration-300"
              ,
              {
                "text-[#ca9c5e]":colored == true,
                "text-white":colored == false,
              }
            )}>  
                <FontAwesomeIcon icon={icon}/>
            
            </button>
        </Link>
    </>
    );
}