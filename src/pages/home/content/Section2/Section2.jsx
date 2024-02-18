import ContactBtn from '../../../../components/ContactBtn/ContactBtn'
import './Section2.scss'
import engineer from '../../../../assets/engineer.png'
const Section2 = () => {
  return (
    <div className='bg-white-100 py-6 xl:pb-10 xl:pt-5'>
        <div className='responsive w-11/12 mx-auto py-14'>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center relative  xl:pb-9 xl:pt-5 '>
                <div className='relative '>
                    <div className='hidden lg:block bg-white-100 text-center p-5 absolute -top-6 -left-7 shadow-2xl'>
                        <h1 className='text-red-400 large-text'>20+</h1>
                        <p>Years Experience</p>
                    </div>
                    <div className='sm:pt-5 xl:pt-0'>
                    <img className='-z-10 w-full' src={engineer} alt="" />
                    <div className='block lg:hidden py-5 bg-white-100 text-center shadow-2xl'>
                        <h1 className='text-red-400 large-text'>20+</h1>
                        <p>Years Experience</p>
                    </div>
                    </div>
                </div>
              <div className='relative'>
              <div className='bg-white-100 shadow-2xl p-7 z-20 xl:absolute lg:-top-32 xl:-top-36 xl:-left-12 '>
                    <p className='py-4 text-center lg:text-start medium-text'>WHO WE ARE</p>
                    <h1 className='large-text text-center lg:text-start'>Lorem ipsum dolor sit amet consectetur. Cras lorem.</h1>
                    <p className='medium-text text-center lg:text-start'>Lorem ipsum dolor sit amet consectetur. Quam non habitasse vel nam tincidunt odio arcu. Et lacus commodo in leo faucibus vel volutpat suscipit. Eu natoque nullam diam augue quam non. Ut adipiscing augue dui magna ante justo enim. Risus non nulla facilisi arcu. Gravida enim id mi suspendisse pellentesque. Vitae sit maecenas neque eu ut. Dignissim sollicitudin orci odio egestas mi libero mattis. Venenatis scelerisque amet volutpat lorem. </p>
                    <div className='py-7 flex justify-center items-center lg:justify-start lg:items-start'>
                        <ContactBtn/>
                    </div>
              </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section2