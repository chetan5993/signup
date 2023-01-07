import React, { useState } from 'react'
import './signup.css';

// let data={name:"",
// email:"",
// password:"",
// cpassword:""}

 





function Signup() {
    const[data,setData]=useState({name:"",email:"",password:"",cpassword:""})
  
  const[error, setError]=useState(false);
  const[success, setSuccess]=useState(false);

  const  eventHandler =(e)=>{
    setData({...data,[e.target.name]:e.target.value})

}
  

function clickHandler(){
    if(data.name=="" ||data.email==""||data.password==""||data.cpassword==""){
    setError(true);
    }
    else if(data.password!==data.cpassword){
        setError(true);
    }
    else{
        setSuccess(true);
        setError(false);
    }
    }


console.log(data)
    return (
    <div className='bigContainer'> 
<div className='container'>
    <h1 className='heading'>Sign up</h1>
     <input type="text"  name='name' value={data.name}  placeholder=' Full name'  onChange={eventHandler}/>
     <br />
<input type="email"  name='email' value={data.email} placeholder='Email' onChange={eventHandler}/>
<br />
<input type="password"  name='password' value={data.password}  placeholder='Password'  onChange={eventHandler}/>
<br />

<input type="password" name='cpassword' value={data.cpassword} placeholder='Conform Password'   onChange={eventHandler}/><br />

{ error && ( <div id="error">Error: All the fild are mendatory</div>)
    }<br />

{ success && <div id="success">Successfully signed up !</div>}
<button type='submit' onClick={clickHandler}>Submit</button>

</div>


    </div>
  )
}

export default Signup