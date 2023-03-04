import React,{useState,useEffect} from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import  "./Menubar.css"
import logo from "../Images/logo.png"
import { FaFacebook,FaInstagram,FaWhatsapp,FaClinicMedical} from "react-icons/fa";
import ReactWhatsapp from 'react-whatsapp';
import { FcAssistant} from "react-icons/fc";
import { Link } from 'react-router-dom';



const Menubar = () => {
    const [activeLink , setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [opacity,setOpacity] = useState(0);  
    const [color,setColor] = useState('black') ;
    
    
    useEffect(()=>{
      
        const onScroll=() =>{
            if(window.scrollY > 50){
                setScrolled(true);
                setOpacity(window.scrollY/100);
                
                
            }
            else {
                setScrolled(false);
                
            }
            if(window.scrollY > 100){
              setColor("#00308F");
            }
            else{
              setColor("black");
            }
            
         console.log(window.scrollY);
        }
        window.addEventListener("scroll",onScroll);
        const onMouseEnter = () => setColor("#0f52ba"); 
        const element = document.getElementsByClassName("nav-name")
        console.log(element.style)
        return ()=>window.removeEventListener("scroll",onScroll);

    },[])
    {console.log(color)}
    {}
  return (
    
    <>
        <Navbar className='navbar' expand="lg" sticky="top" style={{opacity:10,backdropFilter : "blur(0.5rem)" }}>
      <Container>
        <Navbar.Brand href="#home">
            <img className="iwg-logo"src={logo} alt = "Logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/'} className='navbar-links' ><span className='nav-name' style={{color:`${color}`}} >Home</span></Nav.Link>
            <Nav.Link as={Link} to={'/events'} className='navbar-links' ><span  className='nav-name'style={{color:`${color}`}}>Events</span></Nav.Link>
            <Nav.Link as={Link} to={'/team'} className='navbar-links'><span  className='nav-name'style={{color:`${color}`}}>Team</span></Nav.Link>
            <Nav.Link as={Link} to={'/blogs'} className='navbar-links'><span className='nav-name' style={{color:`${color}`}}>Blogs</span></Nav.Link>
           
          </Nav>
          <span className="navbar-text">
          
            <div className="social-icon">
            
                <a href="https://www.facebook.com/iwg.iitkgp" target="_blank"  ><FaFacebook  className="social-media-icon" style={{color:`${color}`}} /></a>
                <a href="https://www.instagram.com/iwg_iitkgp/" target="_blank"><FaInstagram className="social-media-icon" style={{color:`${color}`}}/></a>
                <a  href="https://wa.me/+919705385084" target="_blank"><FaWhatsapp className="social-media-icon" style={{color:`${color}`}}/></a>
              
               <a href="http://www.counsellingcentre.iitkgp.ac.in/"  target="_blank"><FaClinicMedical onClick={()=>{console.log('go to counselling center website')}} className="social-media-icon"  style={{color:`${color}`}}/></a>
              
            </div>
      
            
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default Menubar