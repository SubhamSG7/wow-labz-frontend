import React from "react";
import { useNavigate } from "react-router-dom";
import './LandingPage.css'

const LandingPage = () => {
    const navigate = useNavigate();
    function SignIn() {
        navigate('/SignIn')
    }
    function LogIn() {
        navigate('/Login')
    }
    return (
        <>
            <div className="landingPage-container">
                <img src="https://www.elegantthemes.com/blog/wp-content/uploads/2013/09/bg-7-full.jpg" className="img-fluid" alt="..."></img>
                <h1>Landing Page</h1>
                <div>
                <p class="fw-lighter">Lighter weight text (relative to the parent element).</p>
                <button onClick={SignIn} className="btn btn-primary">SignIn</button>
                </div>
                <div>
                <p class="fw-lighter">Lighter weight text (relative to the parent element).</p>
                <button onClick={LogIn} className="btn btn-primary" >LoginIn</button>
                </div>
            </div>
        </>
    )
}
export default LandingPage;