import logo from './logo.svg';
import './App.css';
import Menubar from './components/Menubar/Menubar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Team from './components/Team/Team';
import Banner from './components/Banner/Banner';
import Event from './components/Event/Event';
import Blogs from './components/Blogs/Blogs';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Footer from './components/Footer/Footer';
import { useEffect , useState} from 'react';
import { BsFillArrowUpCircleFill } from "react-icons/bs";
const App =() => {

  const [showButton, setShowButton] = useState(false);
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    
   <>
   
   <Router>
   <Menubar />
   {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
         < BsFillArrowUpCircleFill className='back-to-top-icon'/>
        </button>
      )}
    <Routes>/
      <Route path='/' exact element={<Banner/>}/>
    
      <Route path='/events' exact element={<Event/>}/>
      <Route path='/team' exact element={<Team/>}/>
      <Route path='/blogs' exact element={<Blogs/>}/>
     
      </Routes>
      <footer><Footer/></footer>
     
   </Router>
  
   </>
  );
}

export default App;
