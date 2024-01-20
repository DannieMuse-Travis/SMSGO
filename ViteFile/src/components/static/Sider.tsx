
import {
    LuBookOpen,
    LuLogOut,
    LuSettings,
  } from "react-icons/lu";
  import {
    MdCancel,
    MdDashboard,
    MdPerson2,
  } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logOut, toggle } from "../../global/ReduxState";


const Sider = () => {
  const dispatch = useDispatch();
  const readToggle = useSelector((state: any) => {
    return state.toggle;
  });

  return (
    <div
    className="transition-all z-20 duration-300 w-full absolute bg-black h-[100%] text-white"
      style={{
        width: `${readToggle ? "200px" : "70px"}`,
      }}>
         <div className="absolute pt-5 pl-10 md:hidden ">
         </div>
         <div
          className={`w-[250px] $
             "flex" : "hidden"
           md:flex  overflow-y-auto fixed bg-zinc-500 h-screen  justify-center items-center  `}
        >  
           <div className="w-[calc(100%-40px)] flex flex-col justify-between  h-[calc(100vh-40px)] ">
              <MdCancel
                className="absolute text-white md:hidden "
              />
              <div className=" border-b-[2px] pb-3 w-full flex justify-center ">
              <div className="text-[30px] font-bold  text-center ">SMSGO💥🚀</div>
              </div>


              <div className= "w-full justify-start flex items-center h-full">

              
              <div className="flex flex-col gap-2 mt-100">
                  <div className=" py-2 rounded-lg text-white text-[14px] flex gap-5 items-center hover:bg-[#5d5d5d] transition-all duration-300 bg--500  ">
                    <div className="ml-4">
                    <MdDashboard size={20}/>
                    </div>
                    <div className="">DashBoard</div>
                  </div>

                  <div className="w-full py-2 rounded-lg text-white text-[14px] flex gap-5 items-center hover:bg-[#5d5d5d] transition-all duration-300 bg--400">
                    <div className="ml-4">
                     <MdPerson2  size={20}/>
                    </div>
                    <div className="">Contact</div>
                  </div>


                  <div className="w-full py-2 rounded-lg text-white text-[14px] flex gap-5 items-center hover:bg-[#5d5d5d] transition-all duration-300 bg--400  ">
                    <div className="ml-4">
                    <LuBookOpen size={20}/>
                    </div>
                    <div className="">History</div>
                  </div>
                  <div className="flex flex-col gap-3 ">

                  </div>
                  
      <div className="flex gap-5 text-white text-[14px] w-full hover:bg-gray-700 transition-all duration-300 cursor-pointer rounded-md pl-2 py-2   h-auto items-end"
      onClick={()=>{
        dispatch(logOut())
      }} >
        <LuLogOut size={15}/>  <>Logout</>
      </div>
      
                  </div>
            </div>
         </div>
        </div>
    </div>
  );
};

export default Sider;
 
 {/* */}
    //   <div>
    //   
{/* 
   */}
 