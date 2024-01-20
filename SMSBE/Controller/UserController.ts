import {Response,Request} from  "express"
import { HTTP } from "../Utils/Enum"
import bcrypt from "bcrypt"
import crypto from "crypto"
import jwt from "jsonwebtoken"
import UserModel from "../Model/UserModel"
import { sendEmail} from "../Utils/Email"
      
// {Create User Controller}
export const createUser = async (req:Request,res:Response)=>{
    try {
        const {email,password,userName} = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const token = crypto.randomBytes(3).toString("hex")

        const user = await UserModel.create({
            email,
            password:hashedPassword,
            userName,
             token,
            avatar:userName.charAt(0),
        })

        sendEmail(user);
        console.log("reading this line");
        return res.status(HTTP.CREATED).json({
            message:"user created successfully",
            data:user
        })
    } catch (error:any) {
        return res.status(HTTP.BAD).json({
            message: "Error creating user: ",
          });
    }
}
      // {Verify User}
export const verifyUser = async (req:Request,res:Response)=>{
    try {
        const {token,email} = req.body;
        const getWithToken  = await UserModel.findOne({token})
        const getWithEmail = await UserModel.findOne({email})
        

        if (getWithEmail && getWithToken) {
          
            await UserModel.findByIdAndUpdate(
                getWithEmail._id,
                {
                    token:"",
                    verify:true,
                },
                {new:true}
            )

            return res.status(HTTP.OK).json({
                message: "user has been verified",
            })
        } else {
            return res.status(HTTP.BAD).json({
                message: "No user found",
              });  
        }
    } catch (error) {
        return res.status(HTTP.BAD).json({
            message: "Error creating user ",
          }); 
    }
}
        // {SignIN user Verification}
export const signinUser = async (req:any,res:Response)=>{
    try {
        const {email,password} = req.body
        const getUser = await UserModel.findOne({email})

        if (getUser) {
            const passwordCheck = await bcrypt.compare(password,getUser.password) 

            if (passwordCheck) {
                if (getUser.verify && getUser.token === "") {
                    const token = jwt.sign(
                        {
                            id:getUser._id,
                        },
                        "secretCode",
                        {expiresIn:"2d"}
                    )
                    return res.status(HTTP.OK).json({
                        message: "user has been verified",
                        data: token,
                      });
                } else {
                    return res.status(HTTP.BAD).json({
                        message: "account hasn't been verified",
                      });
                }
            } else {
                return res.status(HTTP.BAD).json({
                    message: "password error",
                  });
            } 
        } else {
            return res.status(HTTP.BAD).json({
                message: "No user found",
              }); 
        }
    } catch (error) {
        return res.status(HTTP.BAD).json({
            message: "Error creating user: ",
          });
    }
}

// {get one User}
export const getOneUser = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { userID } = req.params;
  
      const getUser = await UserModel.findById(userID);
  
      return res.status(201).json({
        message: "user data",
        data: getUser,
      });
    } catch (error) {
      return res.status(404).json({
        message: "Error",
      });
    }
  };

  // {get All users}
export const getAllUser = async (req: any, res: Response) => {
    try {
      const getUser = await UserModel.find();
  
      return res.status(HTTP.OK).json({
        message: "user found",
        data: getUser,
      });
    } catch (error: any) {
      return res.status(HTTP.BAD).json({
        message: "Error creating user: ",
      });
    }
  };
    //  {Logout User}
  export const logOutUser = async (req: any, res: Response) => {
    try {
      req.session.destroy();
  
      return res.status(HTTP.OK).json({
        message: "User has been logged out",
      });
    } catch (error: any) {
      return res.status(HTTP.BAD).json({
        message: "Error creating user: ",
      });
    }
  };
  