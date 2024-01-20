import {Router} from "express"
import Validator from "../Utils/Validator"
import { passwordValidator, registerValidator } from "../Utils/useValidatot"
import {  createUser, getAllUser, getOneUser, logOutUser, signinUser, verifyUser } from "../Controller/UserController"
import { authorization } from "../Utils/authorization"
import { authRized } from "../Utils/authorized"




const router:Router = Router()

router.route("/register-new-user").post(Validator(registerValidator), createUser)
router.route("/sign-in-user").post(signinUser)

router.route("/get-one-user/:userID").get(getOneUser)

router.route("/all-users").get(authorization, getAllUser)

router.route("/verify-user").post(verifyUser)

router.route("/logout").get(logOutUser)

export default router