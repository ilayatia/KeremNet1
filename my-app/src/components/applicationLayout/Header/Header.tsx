import Navbar from "../NavBar/Navbar";
import "./Header.css";
import keremlogo from '../../../images/keremnet.png'
export default function Header() {
  return (
    <header className="header">
      <div className="card">
        <span></span>
        <div className="content">KeremNet</div>
      </div>
        <img src={keremlogo} sizes="10px"></img>

    </header>
  );
}
