import { Outlet } from "react-router";
import Footer from "../component/common/Footer";
import Navber from "../component/common/Navber";

const Publiclayout = () => {
    return(
        <div>
          <Navber/>
         <Outlet/>
           <Footer/>
          
        </div>
    )
}
export default Publiclayout;