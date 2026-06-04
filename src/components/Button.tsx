import clsx from "clsx";

interface params {
    text:string,
};

export function Button({text}:params){

    // let base = "px-4 py-2 max-w-[200px] w-[150px] transition-all hover:text-teal-500 hover:bg-white";

    return (
        <>
            
            <button type='button' className="border-t-4 
                border-b-4 border-b-amber-600 border-t-amber-600 px-8 py-4 my-4
                text-white font-bold hover:bg-amber-600
                transition-all  duration-500 
                 ">
                 {text}
                </button>
        </>
    );
}