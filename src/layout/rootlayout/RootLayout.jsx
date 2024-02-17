import { Outlet } from "react-router-dom"
import Navbar from '../../components/navbarComponent/Navbar'
import Footer from '../../components/footerComponent/Footer'

const RootLayout = () => {
  return (
    <div>
      <Navbar/>
        <Outlet/>
        <Footer/>
        
    </div>
  )
}

export default RootLayout