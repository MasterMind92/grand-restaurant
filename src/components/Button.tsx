import clsx from "clsx";
import { Link } from "react-router-dom";

interface params {
    text:string,
    link:string,
    align: 'left'| 'center' | 'right'
};

export function Button({text,link,align}:params){

    // let base = "px-4 py-2 max-w-[200px] w-[150px] transition-all hover:text-teal-500 hover:bg-white";

    return (
        <>
            <div>

            <Link to={link} className={clsx(
                "border-t-4 border-b-4 border-b-[#ca9c5e] border-t-[#ca9c5e] px-8 py-4 my-4 text-white font-extrabold hover:bg-[#ca9c5e] text-center  transition-all  duration-500 max-w-2xs block",
                {"ml-auto": align =="right"},
                {"mr-auto": align =="left"},
                {"mx-auto": align =="center"},
            )} >
                 {text}
            </Link>
        </div>
        </>
    );
}