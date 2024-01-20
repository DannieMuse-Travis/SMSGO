import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
export const Message = () => {
  return (
    <div className=" h-[100vh] w-[82.3vw]  bg-[#d9eff8f9] flex justify-center  flex-col">
      <div className=" h-[60px] my-2 px-2 rounded-md  w-[97%] flex items-center justify-center ml-[15px] bg-white">
        <div className=" h-[50px] w-[100%] flex  justify-between items-center text-gray-600">
          <div>
            <h2 className=" text-[22px] font-bold text-gray-500"> Teacher</h2>
          </div>
          <div className=" w-[80%] flex items-center gap-3">
            <div className="  w-[95%] flex items-center justify-center border px-2 rounded-md gap-3">
              <CiSearch />
              <input
                placeholder="Search for students/teachers/documents..."
                className="  h-[40px] w-[90%]  flex-1 rounded-md outline-none text-[12px]"
              />
            </div>
            <div className="  w-[70px] flex items-center justify-between">
              <div className="cursor-pointer">
                <IoNotificationsOutline />
              </div>
             
            </div>
          </div>
        </div>
      </div>
      {/* THE BODY PART */}
      <div className=" h-[100%] w-[100%] justify-center flex">
        <div className=" h-[100%] w-[97%] justify-between flex">
          {/* for the left */}
          <div className="  h-[100%] w-[27%] rounded-lg justify-center bg-white p-1">
            <div className="  h-[100%] w-[93%]    ">
              <div className=" text-[22px] font-bold text-gray-600 flex justify-between items-center">
                Teacher
                <BsThreeDots />
              </div>
              <div className=" h-[40px] w-[95%] bg-white flex justify-center items-center text-gray-400 rounded-md mt-3 border">
                <CiSearch />
                <input
                  placeholder="Search for teachers or id"
                  className=" h-[39px] w-[90%]    outline-none text-[13px] ml-1  "
                />
              </div>
              <hr className="  bg-black mt-3 mb-5" />

              <div className="  w-[100%] h-[14px]flex justify-center">
                <div className=" h-[14px] flex text-[12px] justify-between w-[95%] text-gray-500">
                  <div className=" flex gap-4">
                    <h1>Photo</h1>
                    <h1> Name</h1>
                  </div>
                  <div className=" flex gap-4">
                    <h1>student ID</h1>
                    <h1> Year</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* for the right */}
          <div className=" h-[100%] w-[71.5%] bg-white rounded-md ">
            <div className="w-full h-[100px] bg-zinc-500 rounded-t-lg flex justify-center items-center">
              <div className="w-[95%] flex  items-center h-[100%] ">
              
               
              </div>
            </div>
            <div className="w-[100%] h-[170px] my-[20px] flex justify-center ">
              <div className=" w-[95%] h-[100%] rounded-md border-2 py-[10px] px-[13px]">
             <input type="text" 
             style={
                "w-[95%] h-[100%] rounded-md border-2 py-[10px] px-[13px]"
             }
             />
              
         