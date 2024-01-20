import {google} from "googleapis"
import nodemailer from "nodemailer"
import path from "path"
import ejs from "ejs"
import env from "dotenv"
import jwt from "jsonwebtoken"
env.config()


const GOOGLE_ID = "856651917462-466ae8944v6k79vkmnarp98e59hs52hq.apps.googleusercontent.com"
const GOOGLE_SECRET = "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"
const GOOGLE_REDIRECT_URL = "https://developers.google.com/oauthplayground"

const GOOGLE_REFRESH = "1//04icyJ_h3F9z1CgYIARAAGAQSNwF-L9IrVvRvixHnUFoexycyoUYFGx1FXre8suUf-g7apMRSZZFQIPF69mrTq8IqdXWVGjQSoF0"

const oAuth = new google.auth.OAuth2(
    GOOGLE_ID,
    GOOGLE_SECRET,
    GOOGLE_REDIRECT_URL
);

oAuth.setCredentials({refresh_token:GOOGLE_REFRESH})

const URL:string = 'http://localhost:5173';

export const sendEmail= async (user:any)=>{
    try {
        const  accessToken:any=(await oAuth.getAccessToken()).token;

        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                type:"OAuth2",
                user:"travisgodwindev2@gmail.com",
                clientSecret:GOOGLE_SECRET,
                clientId:GOOGLE_ID,
                refreshToken:GOOGLE_REFRESH,
                accessToken,
            }
        })

        const token = jwt.sign(
            {
              id: user._id,
              email: user.email,
            },
            "secretCode",
            {
              expiresIn: "2d",
            }
          );
          let FrontEndUrl: string = `${URL}/${token}/sign-in`
            let devURL: string = `${URL}/verify-user`
      
        const getFile = path.join(__dirname,"../views/Index.ejs");

        const data = {
            token:user.token,
            email:user.email,
            url: devURL,

        }

        const html = await ejs.renderFile(getFile,{data})

        const  mailer = {
            
          from:"Godwin Travis❤✅🚀💥<danniemuse6@gmail.com>",
          to:user.email,
          subject:"Account opening",
          html,
        }

        await transporter.sendMail(mailer).then(()=>{
            console.log("send")
        })
    } catch (error) {
       return  error;
    }
}

