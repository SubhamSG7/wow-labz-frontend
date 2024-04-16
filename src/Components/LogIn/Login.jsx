import React, { useState } from "react";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [data,setData]=useState({
        email:'',
        password:''
    });
    const navigate=useNavigate();
    function handleLogin(e){
        e.preventDefault();
        fetch('http://localhost:3030/api/user/LogIn', {
            method: 'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                email: data.email,
                password: data.password
              })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log( data);
                if(data.message==='success'){
                    Cookies.set('email', data.email, { expires: 1 });
                    navigate('/HomePage')
                }

                // Handle success response from the backend
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle error response from the backend
            });
    }
    return (
        <>
            <h1>Login Heading</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setData({...data,email:e.target.value})}}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>{setData({...data,password:e.target.value})}}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleLogin}>Submit</button>
            </form>
        </>
    )
}
export default Login;