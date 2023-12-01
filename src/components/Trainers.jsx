import Trainer1 from '../assets/trainer1.jpg'
import Trainer2 from '../assets/trainer2.jpg'

const Trainers = () => {
  return (
    <div className="py-7 px-5 md:px-10">
      <h2 className="text-center uppercase font-bold text-3xl">Meet your trainers</h2>
      <div className='py-10 flex flex-wrap lg:flex-nowrap justify-center gap-16'>
        <div className='w-[75%] md:w-[250px] lg:w-[250px]'>
          <div className="mx-auto w-full h-[250px] md:h-[350px] lg:h-[325px]">
            <img src={Trainer1} alt="trainer" className="w-full h-full object-cover" />
          </div>
          <h5 className='text-xl font-bold uppercase mt-4'>Mike Norton</h5>
          <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ante metus, rhoncus at lacus eget, elementum consectetur mauris.</p>
          <button className='bg-black text-white py-1 px-4 block mt-3'>read more</button>
        </div>
        <div className='w-[75%] md:w-[250px] lg:w-[250px]'>
          <div className="mx-auto w-full h-[250px] md:h-[350px] lg:h-[325px]">
            <img src={Trainer2} alt="trainer" className="w-full h-full object-cover" />
          </div>
          <h5 className='text-xl font-bold uppercase mt-4'>Jeff Perry</h5>
          <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ante metus, rhoncus at lacus eget, elementum consectetur mauris.</p>
          <button className='bg-black text-white py-1 px-4 block mt-3'>read more</button>
        </div>
      </div>
    </div>
  )
}

export default Trainers