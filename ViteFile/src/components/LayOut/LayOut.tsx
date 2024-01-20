import {Outlet} from "react-router-dom"
import { Header } from "../static/Header"
import Sider from "../static/Sider"






const LayOut = () => {
  return (
    <div className="flex w-[100%] justify-between ">
         <Header/>
         <Sider/>
        <Outlet/>
        <br />
        <br />
        <br />
      
    </div>
  )
}

export default LayOut