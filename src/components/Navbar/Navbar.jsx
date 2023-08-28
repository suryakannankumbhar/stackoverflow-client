import React, { useEffect } from 'react'
import {Link,  useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import decode from "jwt-decode";
import logo from "../../assets/logo.png";
import search from "../../assets/search-solid.svg";
import Avatar from "../../components/Avatar/Avatar";
import  "./Navbar.css";
import { setCurrentUser } from "../../actions/currentUser";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';


const Navbar = () => {

    const { i18n, t } = useTranslation(["navbar"]);

    useEffect(() => {
      if(localStorage.getItem("i18nextLng")?.length>2){
        i18next.changeLanguage("en")
      }
    },[])

   const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value)
   }

    const dispatch = useDispatch()
    var User = useSelector((state)=>(state.currentUserReducer))
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/");
        dispatch(setCurrentUser(null));
      };
    

      useEffect(() => {
        const token = User?.token;
        if (token) {
          const decodedToken = decode(token);
          if (decodedToken.exp * 1000 < new Date().getTime()) {
            handleLogout();
          }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
      }, [User?.token, dispatch]);
    
    
     
   
    return (
        <nav className="main-nav">
              
            <div className="navbar">
            <div className="navbar-1">
                <Link to="/" className="nav-item nav-logo">
                    <img src={logo}
                        alt="logo"/>
                </Link>
               
                <Link to="/" className="nav-item nav-btn res-nav">
                {t("about")}
                </Link>
                <Link to="/" className="nav-item nav-btn res-nav">
                {t("products")}
                </Link>
                <Link to="/" className="nav-item nav-btn res-nav">
                {t("forteams")}
                </Link>
                <li className='navbar-1'>
                  <select value={localStorage.getItem("i18nextLng")}
                  onChange={handleLanguageChange }>
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="es">Spanish</option>
                  </select>
                </li>
                <form>
                    <input type="text" placeholder={t("search")}/>
                    <img src={search}
                        alt="search"
                        width="18"
                        className="search-icon"/>
                </form>
                </div>
                <div className="navbar-2">
                {
                User === null ? (<Link to="/Auth" className="nav-item nav-links">
                    {t("login")}
                </Link>) :(
                <>
                
                  <Avatar backgroundColor="#009dff"
                px="10px"
                py="5px"
                borderRadius="50%"
                color="white">
                    <Link to={`/Users/${User?.result?._id}`} style={{color:"white", textDecoration: "none"}}> 
                    {User.result.name.charAt(0).toUpperCase()}
                    </Link>
                </Avatar>
                
               
                <button className="nav-item nav-links" onClick={handleLogout}>
                {t("logout")}

              </button>
                </>)
            } </div>
            </div>
           
        </nav>
    )
}

export default Navbar
