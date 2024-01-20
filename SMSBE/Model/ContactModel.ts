import mongoose,{ Schema, model } from "mongoose";
import { iContactData } from "../Utils/Interface";

const ContactModel = new Schema <iContactData> ({
        ContactName: {
            type: String,
        
        },
        phoneNumber:{
            type: Number,
            unique: true,
            required: true
            
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "users",
          },
}, {timestamps: true})


export default model<iContactData>("contact", ContactModel)


// {Contact Model }