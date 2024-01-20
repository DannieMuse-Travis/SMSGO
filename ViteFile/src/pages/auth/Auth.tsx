import pix from "../../assets/working.png"
import { useNavigate ,Link} from "react-router-dom";
import { createAccount } from "../../Api/authApi";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const Register = () => {
   const  navigate = useNavigate()
   const [email,setEmail] = useState<string>("")
   const [userName,setuserName] = useState<string>("")
   const [password,setPassword] = useState<string>("")
   const [loading,setLoading] = useState<boolean>(false)
 
   const handleSumbit = (e:any)=>{
    // e.preventDefault()
    setLoading(true)
    
    
    
   }

  return (
    <div>
      <div className="w-full flex h-screen bg-[]">
        <div
          className={`w-[50%] lg:block hidden h-full bg-bottom bg-[#445569]`}
        >
          <div className="w-full h-[35vh] text-[55px] font-bold flex-col bg-opacity-80 flex items-center text-center  justify-center text-white bg-[#445569]">
            Welcome to SMSGO 💥🚀
            <div className="text-[14px] text-white text-center  ">
              Get a chance to explore and Connect to your costumers <br />
              with SMSGO 💥🚀
            </div>
          </div>

          <div className="w-full h-[calc(100vh-35vh)] flex justify-center  ">
            <img src={pix} className="w-[80%] object-cover  " alt="" />
          </div>
        </div>

        <div className="w-[100%] lg:w-[50%]  flex items-center  justify-center ">
          <Toaster position="top-center"  reverseOrder={false}/>
          <div className="w-[70%] mb-10   ">
            <div className="w-full mt-10 pb-5 flex justify-center ">
            </div>

            <div className="w-full text-center ">
              <div className="text-[27px] font-semibold ">
                Sign Up to your account
              </div>
              <div className="text-[14px] text-gray-500 ">
                Already have an account?{" "}
                <span className="text-[#414c51]">
                  <a href="/login" className="hover:underline font-[700]">
                    Sign in
                  </a>
                </span>{" "}
              </div>
            </div>

            <form className="w-full mt-10 "  onSubmit={handleSumbit}>
              <div className="mt-5">
                <div className="text-[19px] text-[#5B5B5B] font-bold mb-1 ">
                  UserNAME :
                </div>
                <input
                  
                  type="text"
                  className="pl-4 bg-gray-200 h-10 flex w-full outline-none rounded-md "
                  placeholder="Please input your  Username here"
                />
                          <div className="w-full text-[15px] text-[#EF8192]  ">
                
                </div>
                  
              </div>

              <div className="mt-5">
                <div className="text-[19px] text-[#5B5B5B] font-bold mb-1 ">
                  Email :
                </div>
                <input
                  type="email"
                  className="pl-4 bg-gray-200 h-10 flex w-full outline-none rounded-md "
                  placeholder="Please input your  email here"
                  required
                  value={email}
                  onChange={(e:any)=>{
                    setEmail(e.target.value)
                  }}
                />
                                <div className="w-full text-[15px] text-[#EF8192]  ">
                  
                </div>
              </div>
              <div className="mt-5">
                <div className="text-[19px] text-[#5B5B5B] font-bold mb-1 ">
                  Password :
                </div>
                <input
                  type=""
                  className="pl-4 bg-gray-200 h-10 flex w-full outline-none rounded-md "
                  placeholder="Please enter a secure password here"
                />
                  <div className="w-full text-[15px] text-[#EF8192]  ">
                </div>
              </div>

              <button
                type="submit"
                className="w-full  py-2 mt-10 text-[20px] font-bold rounded-lg text-[#fff] bg-gradient-to-r from-[#445569] to-[#445569]"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
