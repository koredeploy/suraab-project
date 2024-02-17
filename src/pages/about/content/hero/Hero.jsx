import './Hero.scss'

const Hero = ({arrow_img}) => {
  return (
    <div className='about_bg grid place-items-center'>
        <div className='py-10 text-center'>
        <h1 className='text-white-100 large-text'>About</h1>
        <span className='flex justify-center items-center gap-2 py-5 '>
        <p className='text-black-100'>Home</p>
        <span><img src={arrow_img} alt="" /></span>
        <h5 className='text-white-100'>Service</h5>
        </span>
    </div>
    </div>
  )
}

export default Hero