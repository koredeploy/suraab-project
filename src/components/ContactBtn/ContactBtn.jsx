
import { useNavigate } from 'react-router-dom'
import './contactbtn.scss'


const ContactBtn = () => {
  const navigate = useNavigate()
  const route = ()=>{
    navigate("/contactus")
  }
  return (
    <div className='contactbtn'>
        <button onClick={route} className="bg-red-400 lg:w-44 w-36 text-white-100 relative text-xl h-12 hover:border-2 border-red-400"><span className='btneffect'></span><span className="z-100">Contact Us</span></button>
    </div>
  )
}

export default ContactBtn