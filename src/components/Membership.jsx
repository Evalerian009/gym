import Bg from '../assets/membershipbg.jpg'
import Check from '../assets/check.png'
import { membership } from '../constants'

const Membership = () => {
  return (
    <div className="py-12 px-5 md:px-10 w-screen text-[ghostwhite]" style={{backgroundImage: `url(${Bg})`, backgroundPosition: 'center', backgroundSize: 'cover', filter: 'grayscale(100%)'}}>
      <h2 className='text-2xl md:text-3xl uppercase font-semibold'>Best gym membership</h2>
      <div className='h-[90%] py-10 md:px-14 flex flex-col justify-between gap-8'>
        {
          membership.map(item => (
            <div key={item.id} className='md:max-w-[700px] flex text-lg gap-5 md:gap-7 leading-8'>
              <span>
                <img src={Check} alt="check mark" className='max-w-[35px] md:w-[125px] mt-2' />
              </span>
              <span>
                {item.text}
              </span>
            </div>
          ))
        }
      </div>
      <button className='ml-14 py-2 px-5 bg-[ghostwhite] text-black font-semibold uppercase hover:bg-slate-800 hover:text-[ghostwhite]'>Learn More about us</button>
    </div>
  )
}

export default Membership