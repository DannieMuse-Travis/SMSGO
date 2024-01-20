import {NextFunction,Response} from "express"
import {HTTP} from "./Enum"

export const authRized = (req:any,res:Response,next:NextFunction)=>{
    try {
        if(req.session.isAuth){
            next();
        }else{
            return res.status(HTTP.BAD).json({
                 message:"very bad" 
            })
        }
    } catch (error) {
       return error 
    }
}