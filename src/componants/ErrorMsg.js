import React from 'react'
import { Link } from 'react-router-dom'

const ErrorMsg = () => {
    let style = {
        minHeight: "80vh",
        padding: "100px 0px 100px 50px",
        width: "50%",
        margin: "auto 0 "
    }
    return (
        <div className='container' style={style}>

            <h2 style={{ fontSize: " 30px" }}>Sorry!</h2>
            <h1 style={{ fontWeight: "bold", fontSize: "36px" }}>We can't seem to find the resource you're looking for.</h1>
            <p style={{ fontSize: "16px", opacity: "0.7" }}>
                Please check that the Web site address is spelled correctly.
                < br />
                Or go to our < Link to="/" > home page</Link >,
                and use the menus to navigate to a specific section.
            </p >

        </div >
    )
}

export default ErrorMsg