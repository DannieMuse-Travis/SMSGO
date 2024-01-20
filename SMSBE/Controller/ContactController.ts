import express, {Request, Response} from "express"
import ContactModel from "../Model/ContactModel"
import { HTTP } from "../Utils/Enum"
import UserModel from "../Model/UserModel"
import mongoose from "mongoose"




//    {create Contact Controller}
export const CreateContact = async (req:Request, res:Response)=>{

   try {
    const {userID } = req.params
    const {phoneNumber, Name} = req.body
    const user:any = await UserModel.findById(userID)

    const contact = await ContactModel.create({
        phoneNumber,
        ContactName: Name
    })

    user?.contact.push(new mongoose.Types.ObjectId(contact._id))
    user.save()

    return res.status(HTTP.CREATED).json({
        message: `${Name} created to contact to ${user?.userName}`,
        data: contact
    })
   } catch (error) {
    return res.status(HTTP.BAD).json(error)
   }
}

    // {Update Contact Controller}
export const UpdateContact = async(req:Request, res:Response)=>{
    try {
        const {ContactID,userID} = req.params
        const getUserId = await UserModel.findById(userID)
        const getUser = await ContactModel.findById(ContactID)
        const {phoneNumber, Name} = req.body 

      if(getUser && getUserId){
        const updatecontact = await ContactModel.findByIdAndUpdate(getUser._id, {phoneNumber, ContactName: Name}, {new:true}  )

        return res.status(HTTP.OK).json({
            message: "Contact updated",
            data: updatecontact
        })
      }else{
        return res.status(HTTP.BAD).json({
            message: "Contact not found"
        })
      }
    } catch (error) {
        return res.status(HTTP.BAD).json(error)       
    }
}
    // {get  Contact Controller}
export const getContact = async(req:Request, res:Response)=>{
       try {
        
        const userData = await ContactModel.find()

        return res.status(HTTP.OK).json({
            message: "Contact Found",
            data:userData
        })
       } catch (error) {
        return res.status(HTTP.BAD).json(error)
       }
}

export const getUserContacts = async(req:Request, res:Response)=>{
    try {
        const {userID} = req.params
        const contact = await UserModel.findById(userID).populate({
            path: "contact",
            options: {
                
                    sort: {
                        createdAt: -1
                    }
                
            }
        });

        return res.status(HTTP.CREATED).json({
            message: "List of all Contacts",
            data: contact
        })

    } catch (error:any) {
        return res.status(HTTP.BAD).json({
            message: "error occured",
            data: error.message
        })
    }
}

//*{Deleting Contact controller }/ 

export const DeleteContact = async(req:Request, res:Response)=>{
    try {
        
        const {userID, ContactID} = req.params

        const user:any = await UserModel.findById(userID)
        const contact = await ContactModel.findById(ContactID)
        const deletecontact = await ContactModel.findByIdAndDelete(contact?._id)

       await user?.contact.pull(new mongoose.Types.ObjectId(contact?._id))
       await user?.save()
       return res.status(HTTP.OK).json({
        message: `${contact?.ContactName} is deleted `
       })

    } catch (error) {
        return res.status(HTTP.BAD).json({
            message: "Unable to delete Contact"
        })
    }
}