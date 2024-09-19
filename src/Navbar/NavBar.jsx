import React from 'react';
import './NavBar.css';
import {useNavigate,useLocation} from 'react-router-dom'

const NavigationBar = () =>{
    const navigate = useNavigate();
    const location = useLocation();

    return(
        <div className="parent-box">

           <div className="logo-txt">
              <p> Logo </p>
           </div>
           

           <div className="nav-txt">

             <span  style={{marginRight:100,fontWeight:'bold',color:'white',fontSize:20}}>Home</span>
             <span style={{marginRight:100,fontWeight:'bold',color:'white',fontSize:20}}>DashBoard</span>
             <span style={{marginRight:100,fontWeight:'bold',color:'white',fontSize:20}}>Settings</span>
             <span  onClick={() =>navigate('/Profile')} style={{marginRight:100,fontWeight:'bold',color:'white',fontSize:20,textDecoration:location.pathname === '/Profile' ? 'underline' :'transparent'}}>Profile</span>

           </div>


        </div>
    )
}
export default NavigationBar;