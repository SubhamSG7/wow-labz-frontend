import React, { useState } from "react";



const SignIn = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        address: '',
        phoneNumber: '',
        password: ''
    })
    function handleSignin(event) {
        event.preventDefault();
        fetch('http://localhost:3030/api/user/SignIn', {
            method: 'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                name: data.name,
                email: data.email,
                address: data.address,
                phoneNumber: data.phoneNumber,
                password: data.password
              })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                // Handle success response from the backend
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle error response from the backend
            });
    }
    return (
        <>
            <h1>Page Heading</h1>
            <h2>Sign In</h2>
            <div>
                <form onSubmit={handleSignin}>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name" onChange={(e) => {
                            setData({
                                ...data,
                                name: e.target.value
                            })
                        }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
                        <input type="email" className="form-control" id="formGroupExampleInput2" placeholder="Email" onChange={(e) => { setData({ ...data, email: e.target.value }) }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput3" className="form-label">Phone</label>
                        <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Phone No." onChange={(e) => { setData({ ...data, phoneNumber: e.target.value }) }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput4" className="form-label">Address</label>
                        <input type="text" className="form-control" id="formGroupExampleInput4" placeholder="Address" onChange={(e) => { setData({ ...data, address: e.target.value }) }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput5" className="form-label">Password</label>
                        <input type="text" className="form-control" id="formGroupExampleInput5" placeholder="Password" onChange={(e) => { setData({ ...data, password: e.target.value }) }} />
                    </div>
                    <button className="btn btn-primary" type="submit" >Submit</button>
                </form>
            </div>
        </>
    )
}
export default SignIn;