import './HeroSection.scss'

// eslint-disable-next-line react/prop-types
const HeroSection = ({img}) => {
  return (
    <div className='service-bg'>
    <div className='py-10 text-center'>
        <h1 className='text-red-400 large-text'>Our Service</h1>
        <span className='flex justify-center items-center gap-2 py-5 '>
        <p className='text-black-100'>Home</p>
        <span><img src={img} alt="" /></span>
        <h5 className='text-white-100'>Service</h5>
        </span>
    </div>
</div>
  )
}

export default HeroSection