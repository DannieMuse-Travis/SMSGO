import axios from "axios";

const URL:string = "http://localhost:3331/api"

export const createAccount = async (data: any) => {
    try {
      console.log(data)
      return await axios.post(`${URL}/register-new-user`, data).then((res: any) => {
        return res.data;
      });
    } catch (error) {
      
      return error;
    }
  };
  
  export const verifyAccount = async (data: any) => {
    try {
      return await axios.post(`${URL}/verify-user`, data).then((res: any) => {
        return res.data;
      });
    } catch (error) {
      return error;
    }
  };
  
  export const LoginAccount = async (data: any) => {
    try {
      return await axios.post(`${URL}/sign-in-user`, data).then((res: any) => {
        return res.data;
      });
    } catch (error) {
      return error;
    }
  };
  
  export const getAccountOwner = async (userID:any) => {
    try {
      return await axios.get(`${URL}/get-one-user/${userID}`).then((res: any) => {
        return res.data;
      });
    } catch (error) {
      return error;
    }
  };
  