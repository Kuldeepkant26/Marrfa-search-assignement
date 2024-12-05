import React from 'react'
import { Link } from 'react-router-dom'

import '../Css/nav.css'
function Nav() {
    return (
        <div className='navbar'>
            <h1 className='text-red-500 text-2xl'>Books villa</h1>
            <div className="menu">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>

            </div>
        </div>
    )
}

export default Nav
