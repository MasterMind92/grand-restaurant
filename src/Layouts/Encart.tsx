

type params = {
    children?:React.ReactNode
}

export function Encart({children}:params){
    return(
        <>
            <div className="wrapper py-10 h-full">
                <div className="">
                    {children}
                </div>
            </div>
        </>
    );
}