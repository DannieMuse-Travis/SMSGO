import { Document } from "mongoose";
import { HTTP } from "./Enum";

export interface iUser {
    email: string;
    userName: string;
    password: string;
    verify: boolean;
    token: string;
    avatar: string;
    contact?: {}[]
  }

  export interface iContact{
    phoneNumber: number;
    ContactName: string;
    user?: {}
   
  }

  export interface iError {
    name: string;
    message: string;
    status: HTTP;
    success: boolean;
  }

  
  export interface iContactData extends iContact, Document {}
  export interface iUserData extends iUser, Document {}

  // {Model interfaces}