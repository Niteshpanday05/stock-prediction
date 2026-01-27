import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <nav className='navbar container pt-3 pb-3 align-items-start'>
      <Link className='title text-decoration-none' to ="/" >Stock prediction portol</Link>
      <div>
       <Button text='Login' class='btn-outline-info' url="/login"/>
        &nbsp;
        <Button text='Register' class="btn-info" url="/register"/>
      </div>

    </nav>
  )
}

export default Header
