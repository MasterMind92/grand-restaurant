export function Card(){
    return (
        <>
            <div className="rounded-md text-left border block mx-2">
                <div className="">
                    <img className="w-full" src="https://picsum.photos/seed/atr/480/320" alt="" />
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
                
                <button className="p-4 mt-3 w-full bg-teal-500 text-white hover:text-teal-500 hover:bg-white">
                    Voir le produit
                </button>
            </div>
        </>
    );
}