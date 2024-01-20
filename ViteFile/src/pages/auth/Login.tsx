import pix from "../../assets/email logo.png"
import { useNavigate} from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode"
import { loginUser } from "../../global/ReduxState";
import { LoginAccount} from "../../Api/authApi";

export const Login = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const Schema = yup.object({
    email:yup.string().email().required("email must be filled"),
    password:yup.string().min(6).required("password must be filled"),
   })

   const {
    register,
    handleSubmit,
    formState:{errors},
   }=useForm({
    resolver:yupResolver(Schema)
   })

   let  unHandleSubmit = handleSubmit((data:any)=>{
    LoginAccount(data).then((res:any)=>{
      const token: any = jwtDecode(res.data);
      navigate("/home")
      console.log(token)
      dispatch(loginUser(token))
    })
   })

   
  // Godwin6666#
  return (
    <div className="flex h-screen">
      {/* Right Part - Signin Form */}
      <div className="flex-1 p-8 mt-[90px]">
      
        <h2 className="text-3xl font-semibold mb-8 ml-[130px] text-[#5B5B5B]">
          Login To Your Account
          <p className="text-[12px] ml-[70px]">
            Don't have an account?{" "}
            <span className=" text-[#414c51] font-[700]">
              <a
                href="/register"
                className=" cursor-pointer hover:underline text-[13px]"
              >
                Sign up
              </a>
            </span>
          </p>
        </h2>

        <form className="space-y-4" onSubmit={unHandleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-[17px] font-bold text-[#5B5B5B]"
            >
              Email Address
            </label>
            <input
              className="mt-1 p-2 block w-full border text-[14px] rounded-md focus:outline-none"
              placeholder="Please input your email here"
              required
              {...register("email")}
              
            />
            
            {errors.email?.message && (
              <div className="text-[12px] text-red-600 mt-2">
                {errors.email?.message}
              </div>
            )}
            
          </div>

          <div>
            <label
              // htmlFor="password"
              className="block text-[17px] font-bold text-[#5B5B5B]"
            >
              Password
            </label>
            <input
              className="mt-1 p-2 block w-full border rounded-md focus:outline-none text-[14px]"
              placeholder="Please input your password here"
              required
              {...register("password")}
              type="password"
            />
              {errors.password?.message && (
                <div className="text-[12px] text-[#5B5B5B] mt-2">
                  {errors.password?.message}
                  </div>
              )}
             
            
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-[#445569] to-[#445569] text-white py-4 px-56 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 ml-[60px] text-[15px] font-[700]"
          >
            Log in
          </button>
        </form>
      </div>
      {/* Left Part - Background Image and TaskView Write-up */}
      <div
        className="flex-1 bg-cover bg-center p-8 text-white relative bg-[#536c89]"
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-end h-[100%] mb-20">
          <div className="w-[100%] h-[70%]">
          <img src={pix} alt="" className="w-[250px] ml-[160px] mb-[20px]" />
          </div>

          <div className="mt-6 mb-7 flex flex-col items-center justify-end">
            <h2 className="text-4xl font-semibold mb-4">SMSGO💥🚀</h2>
            <p className="w-[300px] text-center text-align:center">
              Get in contact with all costumers in just one text with SMSGO💥🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


//  default Signup;
