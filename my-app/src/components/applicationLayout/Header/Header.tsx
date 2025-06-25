import Navbar from "../NavBar/Navbar";
import zebra from "../../../images/zebra.jpg";
import keremnet from "../../../images/keremnet.png";
import "./Header.css";

export default function Header() {
  const images = [keremnet, zebra];
  return (
    <header className="header">
      <div className="card">
        <span></span>
        <div className="content">KeremNet</div>
      </div>
      {images.map((image, index) => (
        <img key={index} src={image}></img>
      ))}
    </header>
  );
}
