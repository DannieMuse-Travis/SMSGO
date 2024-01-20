import {MdDelete} from "react-icons/md"
export const Contact = () => {
  return (
    <div className="w-full flex justify-end mt-[60px]  ">
      <div
        className=" justify-center w-[calc(100%-10px)] md:w-[calc(100%-250px)] flex mt-[80px]" >
        <div className="w-[95%] grid-cols-7 grid gap-5">
          <div className="bg--100 border rounded-lg xl:col-span-0 shadow-xl col-span-7 text-[40px] flex justify-center items-center">
            <div className="w-[95%] h-[500px]  flex justify-center items-center flex-col">
              <div className="flex justify-center items-center flex-col w-[95%]">
              </div>
              <div className="uppercase  font-semibold">
                Contact
              </div>
              <div className="w-[100%] flex justify-center h-[150px] overflow-y-auto md:h-[82%] border-t-2  mt-[10px]">
                <div className="pt-4 w-[95%] ">
                  <div className="flex">
                    <div className="flex w-[50%] items-center justify-between text-[16px] text-gray-400 ">
                      <div>Photo</div>
                      <div>Name</div>
                      <div></div>
                      <div></div>
                    </div>
                    <div className="flex w-[50%] justify-between items-center  text-[16px] text-gray-400">
                      <div></div>
                      <div className="">Contact</div>
                      <div></div>
                      <div className="flex ">Date</div>
                      <div></div>
                    </div>
                  </div>
                  <div className="w-full mt-5 hover:bg-blue-50 transition-all duration-300 rounded-md cursor-pointer items-center py-5 border-b-2 flex justify-between ">
                    <div className="flex items-center gap-5 w-[50%] ">
                      <div className="w-10 ml- text-sm h-10 rounded-full text-white bg-red-500 flex justify-center items-center mr-3">
                        AD
                      </div>
                      <div>
                        <div className="text-[15px] font-bold text-gray-700 ">
                          Amara Olson
                        </div>
                        <div className="text-[12px]  ">Class IV</div>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center w-[50%] ">
                      <div className="w-[50%] flex justify-center text-gray-300 text-[15px] ">
                        EEE
                      </div>
                      <div className="w-[50%] flex justify-center text-gray-500  text-[15px] ">
                        <div className="cursor-pointer">
                        <MdDelete  size={25}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </div>
      </div>
    </div>
  );
};
