export function Card(){
    return (
        <>
            <div className="rounded-md text-left border block mx-2">
                <div className="">
                    <img className="w-full" src="/img/image-4.jpg" alt="" />
                </div>
                <div className="text-left text-white text-sm pt-3 px-3">Card subtitle</div>
                <div className="flex justify-between align-baseline px-3">
                    <span 
                    className="text-left text-white 
                    text-xl">
                        Card title
                    </span>
                    <span className="text-right text-xl">
                        $ 20.00
                    </span>
                </div>
                
                <p className="text-left text-white pt-3 px-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ab!
                </p>
                
                <button className="p-4 mt-3 w-full bg-[#ca9c5e] font-bold text-white hover:text-[#ca9c5e] hover:bg-white transition-all duration-400">
                    Commander
                </button>
            </div>
        </>
    );
}