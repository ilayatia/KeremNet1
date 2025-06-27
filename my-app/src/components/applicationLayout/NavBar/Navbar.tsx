import { Link } from 'react-router'
import './Navbar.css'
export default function Navbar(){
    return <>
        
    <ul>
        <li><Link className="a" to="/">Home</Link></li>
        <li><Link className="a" to="/post">Post</Link></li>
        <li><Link className="a" to="/">About</Link></li>
        <li><Link className="a" to="/">Contact US</Link></li>
        <li><Link className="a" to="/addpost">Add Post</Link></li>
    </ul>
    </>
}