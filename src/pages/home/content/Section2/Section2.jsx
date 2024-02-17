import ContactBtn from '../../../../components/ContactBtn/ContactBtn'
import './Section2.scss'
import engineer from '../../../../assets/engineer.png'
const Section2 = () => {
  return (
    <div className='bg-white-100 py-4'>
        <div className='responsive w-11/12 mx-auto py-14'>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center'>
                <div className='relative'>
                    <div className='bg-white-100 text-center p-5 absolute -top-6 -left-7 shadow-2xl'>
                        <h1 className='text-red-400 large-text'>20+</h1>
                        <p>Years Experience</p>
                    </div>
                    <img className='-z-10 w-full' src={engineer} alt="" />
                </div>
              <div className='relative'>
              <div className='bg-white-100 shadow-2xl p-7 z-20 xl:absolute -top-40 -left-12 '>
                    <p className='py-4'>WHO WE ARE</p>
                    <h1>Lorem ipsum dolor sit amet consectetur. Cras lorem.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Quam non habitasse vel nam tincidunt odio arcu. Et lacus commodo in leo faucibus vel volutpat suscipit. Eu natoque nullam diam augue quam non. Ut adipiscing augue dui magna ante justo enim. Risus non nulla facilisi arcu. Gravida enim id mi suspendisse pellentesque. Vitae sit maecenas neque eu ut. Dignissim sollicitudin orci odio egestas mi libero mattis. Venenatis scelerisque amet volutpat lorem. </p>
                    <div className='py-7'>
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