import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Layouts/Navbar/Navbar'

function App() {

  return (
    <>
    <Navbar />
      <Outlet/>
    </>
  )
}

export default App
