import ReviewsImg from '../assets/reviewsbg.jpg'
import Quotes from '../assets/quotes.png'

const Reviews = () => {
  return (
    <div className="bg-black text-[ghostwhite] px-7 py-14 md:p-14 relative" style={{backgroundImage: `url(${ReviewsImg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="lg:w-1/2 relative z-[2]">
        <h3 className="uppercase font-semibold text-3xl md:text-4xl ">What people say</h3>
        <p className='text-xl mt-7 leading-8 font-[300]'>In ut ipsum congue, consectetur diam in, ornare massa. Etiam tincidunt blandit lectus in lobortis. Aenean molestie nibh sed diam placerat rutrum. Nullam auctor risus id enim consequat, a vestibulum magna ultrices.</p>
        <h5 className='mt-4 text-lg capitalize font-bold'>Henry Hart</h5>
        <button className='text-lg border border-[ghostwhite] py-2 px-5 mt-5 font-semibold hover:bg-[ghostwhite] hover:text-black'>Read More</button>
      </div>
      <div className='absolute right-[10%] top-0 z-[1] w-1/3 h-full' style={{filter: 'opacity(70%)'}}>
        <img src={Quotes} alt="" className='w-full h-full object-fit' />
      </div>
    </div>
  )
}

export default Reviews