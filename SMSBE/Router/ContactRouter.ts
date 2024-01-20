import {Router} from "express"
import { CreateContact, DeleteContact, UpdateContact,getUserContacts , getContact } from "../Controller/ContactController"


const router = Router()

router.post("/:userID/create-contact", CreateContact)
router.get("/:userID/get-all-contacts", getUserContacts)
router.get("/get-one-contact", getContact)
router.patch("/:userID/:ContactID/update-contact/", UpdateContact )
router.get("/:userID/:ContactID/delete-contact", DeleteContact)
export default router 


// {ContactRoute}