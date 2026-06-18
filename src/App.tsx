
import './App.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Accueil from './Pages/Accueil'
import Apropos from './Pages/Apropos'
import Contact from './Pages/Contact'
// import { useState, useEffect } from 'react'




function App() {

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate initial data fetching or asset loading
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000); // 2 seconds

  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading) {
  //   return (
  //     <div className="h-lvh flex flex-row justify-center content-center">
  //       <div className="loader"></div>
  //     </div>
  //   );
  // }
  

  return (
    <>
        <BrowserRouter>
        
            {/* Routes */}
        <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/accueil" element={<Accueil />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        </BrowserRouter>
        

      
    </>
  )
}

export default App
