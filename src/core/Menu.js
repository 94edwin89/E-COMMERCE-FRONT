import React from 'react'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'


const Menu =()=>(
    <div>
        <ul className='nav nav-tabs bg-primary'>
            <li className='nav-item'>
                <Link className="nav-link" to="/">Home Page</Link>
            </li>
            <li className='nav-item'>
                <Link className="nav-link" to="/signin">signin Page</Link>
            </li>
            <li className='nav-item'>
                <Link className="nav-link" to="/signup">signup Page</Link>
            </li>
        </ul>
    </div>
)


export default withRouter(Menu);