import express,{Application} from "express"
import cors from "cors"
import env from "dotenv"
import   { dbConfig } from "./COnfig/Database"
import { MainApp } from "./MainApp"
env.config();
import expressSession from "express-session"
import MongoDBStore from "connect-mongodb-session"
import ejs from "ejs"

// const mongoConnect = MongoDBStore(expressSession)


const app:Application = express()
const port : number = parseInt(process.env.PORT!)

app.use(cors())
app.use(express.json())
app.set("view engine", ejs)

MainApp(app)

const server = app.listen(port,()=>{
 console.clear();
 console.log();
 console.log("Server is Live 💥🚀⭐⚡")
 dbConfig()
  
})

process.on("uncaughtException",(error)=>{
    console.log("Server is shutting downn because of uncaughtException")
    console.log(error)
    process.exit(1)

})

process.on("unhandledRejection",(reason)=>{
    console.log("server is shutting down because of unhandledRejection")
    console.log(reason)
    server.close(()=>{
        process.exit(1)
    })
})
