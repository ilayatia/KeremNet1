import Navbar from "../NavBar/Navbar";
import "./Header.css";
export default function Header() {
    const images = ["zebra.jpg","keremnet.png"]
  return (
    <header className="header">
      <div className="card">
        <span></span>
        <div className="content">KeremNet</div>
      </div>
      {images.map((image,index)=><img key={index} src={require(`../../../images/${image}`)}></img>)}
        
    </header>
  );
}
