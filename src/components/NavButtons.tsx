

export default function NavButtons(){

    const buttonClasses = " px-8 text-white font-bold text-lg font-bold px-2 py-1 hover:bg-gray-500 transition duration-300";

    return (
      <>
        <button className={buttonClasses}>Accueil</button>
        <button className={buttonClasses}>A Propos</button>
        <button className={buttonClasses}>Contact</button>
      </>
    )
}