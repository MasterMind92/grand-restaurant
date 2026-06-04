
import './App.css'
import { Header } from './components/Header'
import { Encart } from './Layouts/Encart'
import { Button } from './components/Button'



function App() {
  

  return (
    <>
      <Header />

      <Encart>
          <div className="flex justify-start">
              <div className="w-1/3 p-4 ">
                <img src="img/image-3.jpg" alt="" />
              </div>
              <div className="w-1/2 p-4 text-left flex flex-row">
              <div className="content-center">
                <div className="text-white text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, obcaecati?</div>
                <div className="text-amber-600 text-5xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, accusantium. Officiis animi saepe pariatur nihil.</div>

              </div>
              </div>
          </div>
      </Encart>

      <Encart>
        <div className="flex flex-row justify-center px-10">
          <div className="w-1/3">
              <div className="text-white text-xl">
                Lorem ipsum dolor 
              </div>
              <div className="text-white text-4xl font-bold py-4">
                NOTRE CHEF <br /> RECOMMANDE
              </div>
              <div className="text-white text-2xl py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, obcaecati?
              </div>
              <Button text='VOIR MENU'/>
          </div>
            
          <div className="w-1/2">
            IMG TRANSPARENTE FLOTTANTE
          </div>
        </div>
      </Encart>
      <div className="py-24"></div>
      <Encart>
          <h1 className='text-white text-6xl font-bold'>NOTRE MENU</h1>

      </Encart>
    </>
  )
}

export default App
