import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import  * as AiIcons from 'react-icons/ai';
import * as ImIcons from 'react-icons/im';

import { Link } from 'react-router-dom';
import { SidebarData } from '../Sidebar/SidebarData';
import { IconContext } from 'react-icons';


import BelAirsVid from '../video/BelAirs.mp4';


import './Home.css';
import NewComponent from '../../login.js';


function Home() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)

   const click=() => {
       
   }


    return (
        <div className="home">
       
            <video
                className="home__video"
                autoPlay
                loop
                muted
                style={{
                    position: "absolute",
                    width: "100%",
                    left: "50%",
                    top: "50%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                    zIndex: "-1"

                }}
            >
                <source src={BelAirsVid} type="video/mp4" />
            </video>

            <IconContext.Provider value={{ color: '#fff' }} >
                <header className="header">
                    <div className="brand">
                        <Link to="#" className="menu-bars" >
                            <FaIcons.FaBars onClick={showSidebar} className="header__menu" />
                            <h4>Menu</h4>
                        </Link>
                        
                        <ul className="header__list">
                            <li>Bookings</li>
                        </ul>
                    </div>
                    <div className="logo">
                        <h4>Blr airs</h4>
                    </div>
                    <div className="header__links">
                        <ul className="header__list">
                           
                            <li>Contact</li>
                            <li>Help</li>
                        </ul>
                    </div>
                </header>

                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items" onClick={showSidebar} >
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose className="header__close" />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName
                                }>
                                    <Link to={item.path}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })}

                        
                       
                    </ul>
                    <div className="nav-details">
                            <div className="nav-address">
                                <h5>Find Us</h5>
                                <p> sutta gully</p>
                                <h5>Call Us</h5>
                                <p>
                                    {/* <AiIcons.AiOutlineMobile className="phone" /> +44(0)20 3548 6589  */}
                                    <ImIcons.ImMobile className="phone" /> +91 9951198276
                                </p>
                            </div>
                            <div className="nav-socials">
                                <a className="nav-socials-icons" href="https://www.instagram.com/ritvik._/">
                                   <FaIcons.FaInstagram className="socials" />
                                </a>
                                <a className="nav-socials-icons" href="https://www.facebook.com/ParamahamsaNithyananda">
                                    <FaIcons.FaFacebookF className="socials" />
                                </a>
                                <div className="nav-socials-icons">
                                    <FaIcons.FaTwitter className="socials" />
                                </div>
                                <a className="nav-socials-icons" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                    <FaIcons.FaYoutube className="socials" />
                                </a>
                            </div>
                        </div>
                </nav>
           </IconContext.Provider>
    
           <section className="home__body">
               <div className="home__socials">
                   <div className="home__SM">
                       <FaIcons.FaFacebookF className="home__SMicon" />
                   </div>
                   <a className="home__SM" href="https://www.instagram.com/ritvik._/">
                       <FaIcons.FaInstagram className="home__SMicon"  />
                   </a>
                   <div className="home__SM">
                       <FaIcons.FaTwitter className="home__SMicon" />
                   </div>
                   <a className="home__SM" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                       <FaIcons.FaYoutube className="home__SMicon" />
                   </a>
               </div>
               <div className="home__content">
                   <h2>Premium airplanes </h2>
                   <h1>Feel at home wherever you are</h1>
                   <div className="home__button">
                    <Link target="_blank" to="/login"><button className="button-os" >Search Flights </button></Link>
                   </div>
                  
               </div>

           </section>
        </div>
    )
}

export default Home;

