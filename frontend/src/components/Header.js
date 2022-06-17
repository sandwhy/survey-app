import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Payment from './Payment'

const Header = () => {
  console.log(1)
  const {auth} = useSelector((reducer) => reducer)
  
  console.log("auth")
  console.log(auth)
  console.log(auth.credits)

  let how 
  if (auth === false) {
    how = <li><a href="/auth/google">Login With Google</a></li>
  } else if (auth === null) {
    how = <li><a>loading</a></li>
  } else {
    how = [
      <li key="1"><Payment /></li>,
      <li key="3" style={{margin: '0 10px'}}>
        Credits: {auth.credits}
      </li>,
      <li key="2"><a href='/api/logout'>Logout</a></li>
    ]
  }

  return (
    <nav>
      <div className='nav-wrapper'>
        <Link 
          to={auth ? '/surveys' : '/'} 
          className='left brand-logo'
        >
          Emaily
        </Link>
        <ul className='right'>
          {how}
        </ul>
      </div>
    </nav>
  )
}

export default Header