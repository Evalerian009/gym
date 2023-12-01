import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeroImg from '../assets/herobg.jpg'
import Logo from '../assets/logo.png'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

const Hero = ({ menu, handler }) => {
  return (
    <div className='w-screen h-screen py-7 px-5 md:px-10 text-[ghostwhite] relative' style={{backgroundImage: `url(${HeroImg})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
      <nav className='flex items-center justify-between h-[10%]'>
        <a href='home' className='flex items-center gap-2 text-2xl md:text-3xl font-semibold'>
          <img src={Logo} alt='logo' className='w-[35px] md:w-[100px]' />
          <span>Shark Gym</span>
        </a>
        <ul className='nav hidden lg:flex gap-10 text-lg font-semibold'>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="home">Trainers</a>
          </li>
          <li>
            <a href="home">About & Reviews</a>
          </li>
          <li>
            <a href="home">Contact Us</a>
          </li>
        </ul>
        <ul className={`nav lg:hidden flex flex-col gap-10 text-lg font-semibold absolute bg-black ${menu ? 'left-0' : 'left-[-450px]'} w-[70%] p-10 top-0  h-[100vh] transition-left duration-500`}>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="home">Trainers</a>
          </li>
          <li>
            <a href="home">About & Reviews</a>
          </li>
          <li>
            <a href="home">Contact Us</a>
          </li>
        </ul>
        <span className='lg:hidden text-[30px]'>
          <FontAwesomeIcon icon={menu ? faX : faBars} onClick={() => handler()} />
        </span>
      </nav>
      <div className='w-full h-[90%] flex justify-center items-center'>
        <h1 className='text-7xl uppercase font-bold'>Eat. Sleep. Train.</h1>
      </div>
    </div>
  )
}

export default Hero