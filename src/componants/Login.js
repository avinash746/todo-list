import React from 'react';
import { Link } from "react-router-dom";

const Login = () => {
    let style = {
        width: "50%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem"

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
                <h2 className='text-center'>Login</h2>
                <div class="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group">

                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "50%" }}>
                        <Link to="#">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </Link>
                    </div>
                </div>

                <div className="form-group" style={myStyle2}>
                    <div>
                        <small id="loginHelp" className="form-text text-muted">Do not have an Account ? </small>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login