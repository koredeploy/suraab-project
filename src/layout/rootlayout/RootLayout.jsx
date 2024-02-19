import { Outlet } from "react-router-dom"
import Navbar from '../../components/navbarComponent/Navbar'
import Footer from '../../components/footerComponent/Footer'
import './RootLayout.scss'

const RootLayout = () => {
  return (
    <div>
      <Navbar/>
       <div >
       <Outlet/>
       </div>
        <Footer/>
        
    </div>
  )
}

export default RootLayout