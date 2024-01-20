import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

interface Credentials {
  apiKey: string;
  username: string;
}

const credentials: Credentials = {
  apiKey: "4ef767a770b80e8edaf5927c32975872f8e78a9f529f13c97b65b095d897cbe4",
  username: "SMSGo"
};

const AfricasTalking = require("africastalking")(credentials);

const sms = AfricasTalking.SMS;

router.post("/incoming-message", async (req: Request, res: Response) => {
  try {
    const {message, numbers} = req.body
    sms.sendBulk({
      message: message,
      enqueue: true,
      to: numbers
    })
      .then((response:any) => {
        console.log(response);
        res.status(200).json(response);
      })
      .catch((error: any) => {
        console.log(error);
        res.status(404).json(error);
      });
  } catch (error) {
    res.status(404).json(error);
  }
});

export default router