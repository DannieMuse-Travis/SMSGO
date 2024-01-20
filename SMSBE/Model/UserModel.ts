import  mongoose,{Schema,model} from "mongoose"
import { iUserData } from "../Utils/Interface";

  const userModel = new Schema<iUserData>(
    {
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
      },
      userName: {
        type: String,
      },
      avatar: 
      { type: String },
      token:
       { type: String, unique: true },
      verify: {
        type: Boolean,
        default: false,
      },
      contact:[
        {
          type: mongoose.Types.ObjectId,
          ref: "contact"
        }
      ]
    },
    { timestamps: true }
  );
  
  export default model<iUserData>("users", userModel);
  