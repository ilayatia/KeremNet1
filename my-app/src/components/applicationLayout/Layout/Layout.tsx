import { Home } from "@mui/icons-material";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";
import './Layout.css'
import HomePage from "../../HomePage/HomePage";
import Header from "../Header/Header";

export default function Layout(){
    return <>
    <Header/>
    <Navbar/>
    <div className="main">
        <HomePage/>
    </div>
    <Footer/>
    </>
}