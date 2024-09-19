import React from 'react';
import './NavBar.css';
import {useNavigate,useLocation,Link} from 'react-router-dom'

const NavigationBar = () =>{
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (path) =>{
       if(location.pathname !== path)
         navigate(path);
    }

    return(
        <div className="parent-box">

           <div className="logo-txt">
              <p> Logo </p>
           </div>
           

           <div className="nav-txt">

             <span  style={{marginRight:100,fontWeight:'bold',color:'white',fontSize:20}}>Home</span>
             <span style={{marginRight:100,fontWeight:'bold',color:'white',fontSize:20}}>DashBoard</span>
             <span style={{marginRight:100,fontWeight:'bold',color:'white',fontSize:20}}>Settings</span>
             <Link to="/Profile"
             style={{marginRight:100,fontWeight:'bold',color:'white',fontSize:20,textDecoration:location.pathname === '/Profile' ? 'underline' :'transparent'}}
             > Profile </Link>

           </div>


        </div>
    )
}
export default NavigationBar;
