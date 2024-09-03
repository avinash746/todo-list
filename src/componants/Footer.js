import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {


  return (
    <footer className='bg-dark text-light p-2'>
      <p className='text-center my-3 '>
        Made with ❤️ by :
        <Link to="https://github.com/avinash746" target="_blank" className='link' style={{color:"white"}}><b>Avinash Kumar</b></Link>
      </p>
    </footer>
  )
}
