
import './App.css'
import { Header } from './components/Header'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Accueil from './Pages/Accueil'


function App() {
  

  return (
    <>
        <BrowserRouter>
        <Header />
            {/* Routes */}
        <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/accueil" element={<Accueil />} />
            {/* <Route path="/products" element={}> */}
        </Routes>
        </BrowserRouter>
        

      
    </>
  )
}

export default App
