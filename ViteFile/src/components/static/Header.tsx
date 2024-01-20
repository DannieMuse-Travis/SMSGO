import { IoIosNotificationsOutline, IoIosSearch } from "react-icons/io";
import Hooks from "../../Hooks/Hooks"

export const Header = () => {
  
  const {data}:any = Hooks()

  return (
    <div className="transition-all duration-300 m-7">
      <div
        className=" h-[70px] bg-white right-0 fixed z-10 md:w-[calc(100%-250px)] w-[calc(100%-80px)] flex justify-center items-center"

      >
        <div className="w-[95%]  shadow-lg rounded-[10px] p-3 flex items-center justify-between">
          <h3 className="flex text-[20px] font-bold cursor-pointer">SMSGO💥🚀</h3>

          <div className=" w-[75%] hidden lg:flex h-[40px] bg-white rounded-sm items-center border">
            <div className="ml-[10px] cursor-pointer">
              <IoIosSearch size={24} />
            </div>
            <input
              type="search"
              placeholder="Search For Contacts"
              className="flex flex-[0.99]  bg-white rounded-sm h-[100%] outline-none border-none ml-[15px]"
            />
          </div>
          <div className="ml-[10px] cursor-pointer">
            <IoIosSearch size={24} />
          </div>
          <div className="flex items-center w-[70px]  justify-between">
            <div className="cursor-pointer">
              <IoIosNotificationsOutline size={24} />
            </div>
            <div
              className="w-[40px] h-[40px] rounded-[50%] bg-orange-500 flex justify-center items-center cursor-pointer position: fixed
          "
            >
              { data?.userName[0]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
