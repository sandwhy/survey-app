import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {fetchUser} from '../actions/index'

const Header = () => {
  console.log(1)
  const {auth} = useSelector((reducer) => reducer)
  
  console.log("auth")
  console.log(auth)

  return (
    <nav>
      <div className='nav-wrapper'>
        <a className='left brand-logo'>
          Emaily
        </a>
        <ul className='right'>
            {auth == false 
              ?  <li><a href="/auth/google">Login With Google</a></li>
              : <li><a href='/api/logout'>Logout</a></li>
            }
        </ul>
      </div>
    </nav>
  )
}

export default Header