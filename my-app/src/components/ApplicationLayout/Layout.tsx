import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import NavBar from './NavBar';

export default function Layout(){
    return <>
        <Router>
          <NavBar/>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<MainPage />} />
            <Route path="/contact" element={<MainPage />} />
          </Routes>
        </Router>
    </>
}