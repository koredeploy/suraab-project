import arrow from '../../assets/arrow.png'
import './Service.scss'
import HeroSection from './content/hero/HeroSection'
import Section2 from './content/section2/Section2'

const ServicePage = () => {
  return (
    <div>
        <HeroSection img={arrow}/>
        <Section2/>
        
    </div>
  )
}

export default ServicePage