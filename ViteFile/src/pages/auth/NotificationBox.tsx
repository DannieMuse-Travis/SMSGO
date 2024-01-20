import { Link } from "react-router-dom";
import pix from "../../assets/thankyou_gif.gif"
export const NotificationBox = () => {
  return (
    <div className=" flex items-center flex-col">
      <div className=" flex justify-center mt-10 items-center flex-col">
        <img src={pix} />

        <div className="flex text-[40px] font-bold">
          Thanks for signing up with SMSGO💥🚀!
        </div>
        <div>
          Kindly click the verification link sent to your email Id and continue
          with your desired reaching your costumers.
        </div>
        <div className="w-full flex justify-center text-[12px] mt-8 ">
            <Link to="/verify-user">
              <span className="ml-1 font-bold">Click here to verify</span>
            </Link>{" "}
          </div>
      </div>
    </div>
  );
};
