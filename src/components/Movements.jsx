import { movement } from "../constants"
import MovementImg from '../assets/movement.jpg'

const Movements = () => {
  return (
    <div className="md:px-14 mt-12 lg:mt-0 flex flex-col lg:flex-row items-center">
      <div className="lg:w-[48%] flex flex-col gap-5 px-10">
        {movement.map(item => (
          <div key={item.id}>
            <h4 className="text-2xl font-semibold uppercase">{item.header}</h4>
            <p className="mt-1 text-normal">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="w-[75%] md:w-[48%] mt-7 lg:mt-0 h-[300px] lg:h-[500px]">
        <div className="w-full h-full">
          <img src={MovementImg} alt="moveent image" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="w-[2%]" />
    </div>
  )
}

export default Movements