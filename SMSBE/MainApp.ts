import {Application, Request,Response,NextFunction} from "express"
import { HTTP } from "./Utils/Enum"
import {mainError} from "./errors/mainError"
import {handleError} from "./errors/HandleErrors"
import user from "././Router/UserRouter"
import contact from "./Router/ContactRouter"
import sms from "./Controller/BulkSMSController"
import Google from "passport-google-oauth20";



// const GoogleStrategy = Google.Strategy;


export const MainApp = (app:Application)=>{
  try {
    app.use("/api",user)
    app.use("/api/v1/contact",contact)
    app.use("/api/v1/sms", sms)

     app.get("/",(req:Request,res:Response):Response=>{
        try {
            const user = req.user;
            return res.status(HTTP.OK).json({
                message:"AWesome APi",
                data:user
             })
        } catch (error) {
            return res.status(HTTP.BAD).json({
                message: error
            })
        }
     })

    
    app.all("*",(req:Request,res:Response,next:NextFunction)=>{
        next(
            new mainError({
                name:"Route Error",
                message:`This endpoint you entered ${req.originalUrl} doesn't exist`,
                status:HTTP.BAD,
                success:false,
            })
        )
    })

     app.use(handleError)
  } catch (error:any) {
    return error
  }

}




