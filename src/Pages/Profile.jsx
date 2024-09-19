import React,{useState} from 'react';
import '../App.css'

const Profile = () => {
    const[isCheck,SetIsCheck] = useState(true);
    const[count,SetCount] = useState(0);
    const handleIncrement = () =>{
        SetCount(count+1);
    }
    const handleDecrement = (minus) =>{
        if(count > 0){
            SetCount(count-minus)
        }
        
    } 
    return (
        <div class="counter-parent">
            <center>
                <div>
                    <input value={count} disabled={isCheck} style={{padding:10,width:400,textAlign:'center',fontWeight:'bold',color:'red',fontSize:20}} type="text" />
                </div>

                <div>
                    <button onClick={() => SetIsCheck(false)} style={{padding:10,marginTop:10}}> Enable </button>  
                    <button onClick={() => SetIsCheck(true)}  style={{padding:10,marginTop:10,marginLeft:10}}> Disable </button>    
                </div>

                <div>
                    <button onClick={handleIncrement} style={{padding:10,marginTop:10}}> INCREMENT </button>  
                    <button onClick={() => handleDecrement(1)} style={{padding:10,marginTop:10,marginLeft:10}}> DECREMENT </button>    
                </div>

            </center>


        </div>
    )
}

export default Profile;