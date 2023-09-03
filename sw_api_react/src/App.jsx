import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { Outlet } from 'react-router-dom' //outlet vai receber o component da rota declarada em main.jsx. se rota = "/" Outlet recebe o componente Home


function App() {
 
  return (
    <div className='app'>

      <Navbar />
      
      <Outlet/>
      <Footer />
    </div>      
  )
}

export default App
