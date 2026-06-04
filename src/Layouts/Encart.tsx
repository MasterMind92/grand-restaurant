

type params = {
    children?:React.ReactNode
}

export function Encart({children}:params){
    return(
        <>
            <div className="wrapper">
                <div className="container py-10 h-full">
                    {children}
                </div>
            </div>
        </>
    );
}