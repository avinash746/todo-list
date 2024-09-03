import React from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
    let style = {
        width: "50%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "10px"
    }
    
    let myStyle2 = {
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        justifyContent: "center"
    }

    return (

        <div className='container p-5'>
            <form className='form-control' style={style}>
                <h2 className='text-center'>Sign Up</h2>
                <div className="form-group">
                    <label htmlFor="exampleInputName">Name</label>
                    <input type="text" className="form-control" id="exampleInputName" placeholder="Enter your name" />
                    <small id="nameHelp" className="form-text text-muted">We'll never share your name with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputConfirmPassword1">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputConfirmPassword1" placeholder="Confirm Password" />
                </div>
                <div className="form-group">

                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "50%" }}>
                        <Link to="#">
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </Link>
                    </div>
                </div>

                <div className="form-group" style={myStyle2}>
                    <div>
                        <small id="loginHelp" className="form-text text-muted">Already have an account? </small>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </form>

        </div>


    )
}
export default SignUp