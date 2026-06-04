export function Footer(){
    return (
        <footer id="footer">
        <div className="p-6 bg-teal-500">
            <div className="mx-auto flex justify-center">
                <div 
                  className="text-white font-medium
                    text-3xl mr-4">
                  Abonnez-vous a notre newsletter
                </div>
                <div>
                  <input 
                    type="text" 
                    className="border rounded-1xl p-3 bg-white" 
                    placeholder="Entrez votre adresse Emails"
                  />
                  <button 
                  className="p-3 bg-white 
                  text-teal-500 font-medium 
                  hover:bg-teal-700
                  hover:text-white"> 
                    Valider
                  </button>

                </div>
            </div>
        </div>
        <div className="p-6 bg-black flex justify-center">
            <div className="p-4">
                <div className="text-4xl font-medium text-white">Logo</div>
            </div>
            <div className="p-4">
                <h3 className="text-3xl">Bonjour</h3>
                <ul className="list-none text-left">
                    <li>bonjour</li>
                    <li>bonjour</li>
                    <li>bonjour</li>
                </ul>
            </div>
            <div className="p-4">
                <h3 className="text-3xl">Bonjour</h3>

                <ul className="list-none text-left">
                    <li>bonjour</li>
                    <li>bonjour</li>
                    <li>bonjour</li>
                </ul>
            </div>
            <div className="p-4">
                <h3 className="text-3xl">Bonjour</h3>

                <ul className="list-none text-left">
                    <li>bonjour</li>
                    <li>bonjour</li>
                    <li>bonjour</li>
                </ul>
            </div>

        </div>
        <div className="p-6 bg-teal-500">

        </div>
      </footer>
    );
}