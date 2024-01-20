
import {MdSearch} from  "react-icons/md"

interface Iprosp{
    placeholder?:string
}
const Button = () => {
  return (
    <div  className='flex border w-[300px] h-[50px] rounded-md m-2 px-2 items-center'>
        <div>
          <MdSearch/>
        </div>
        <input 
        placeholder='search' className='w-full h-full outline-none pl-1' />
    </div> 
  )
}

export default Button