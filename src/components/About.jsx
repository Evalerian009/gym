import AboutImg from '../assets/aboutimg.jpg'

const About = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:h-[400px]'>
      <div className="lg:w-[30%] flex justify-center items-center">
        <div className='w-[180px] my-7 md:w-[230px] md:max-h-[325px] flex items-center'>
          <img src={AboutImg} alt='about image w-full h-full object-cover' />
        </div>
      </div>
      <div className="lg:w-[60%] bg-black text-[ghostwhite] p-10">
        <h3 className='text-lg uppercase'>About us</h3>
        <h4 className='mt-4 text-3xl md:text-4xl uppercase font-bold'>This place is special...</h4>
        <p className='mt-4'>Nunc quis condimentum dolor. Cras ut vestibulum mi. Quisque gravida velit dolor, id ullamcorper dolor sollicitudin ac. Donec ut consequat velit. Proin volutpat interdum enim, ac venenatis ex lobortis semper. Nunc hendrerit libero purus, sed vestibulum urna ornare sed. Mauris rhoncus venenatis maximus. Proin eget nibh vel nibh semper pretium. Nam non libero bibendum, gravida lacus vel, luctus velit. Nunc vel ex vestibulum, fringilla ipsum eget, iaculis purus.</p>
      </div>
      <div className="p-3 lg:w-[10%] flex justify-center items-center text-4xl font-bold">
        <h5>O1</h5>
      </div>
    </div>
  )
}

export default About