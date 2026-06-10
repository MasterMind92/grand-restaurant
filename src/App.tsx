
import './App.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Accueil from './Pages/Accueil'
import Apropos from './Pages/Apropos'


function App() {
  

  return (
    <>
        <BrowserRouter>
        
            {/* Routes */}
        <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/accueil" element={<Accueil />} />
            <Route path="/apropos" element={<Apropos />} />
        </Routes>
        </BrowserRouter>
        

      
    </>
  )
}

export default App
