import { Link } from 'react-router-dom'
import './HeroSection.scss'

// eslint-disable-next-line react/prop-types
const HeroSection = ({img}) => {
  return (
    <div className='service-bg flex items-center justify-center '>
<div className="py-10 text-center">
        <h1 className="text-white-100 large-text pt-24 ">Service</h1>
        <div className="flex justify-center items-center gap-2 py-5 ">
          <Link to="/">
            <p className="text-black-100 text-3xl font-medium">Home</p>
          </Link>
          <span>
            <img src={img} alt="" />
          </span>
          <h5 className="text-white-100 text-3xl font-semibold">Service</h5>
        </div>
      </div>
</div>
  )
}

export default HeroSection