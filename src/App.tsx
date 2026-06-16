
import './App.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Accueil from './Pages/Accueil'
import Apropos from './Pages/Apropos'
import Contact from './Pages/Contact'



function App() {
  

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
