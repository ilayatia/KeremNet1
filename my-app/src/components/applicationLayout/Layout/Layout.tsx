import { Home } from "@mui/icons-material";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";
import './Layout.css'
import HomePage from "../../Pages/HomePage/HomePage";
import Header from "../Header/Header";
import { PropsWithChildren } from "react";

const Layout:React.FC<PropsWithChildren> = ({children})=>{
    return <>
    <Header/>
    <Navbar/>
    <div className="main">
        {children}
    </div>
    <Footer/>
    </>
}
export default Layout;