import React from 'react'
import Button from './Button'

const Header = (props) => {
  return (
    <nav className='navbar container pt-3 pb-3 align-items-start'>
      <a className='title text-decoration-none"' href ="" >Stock prediction portol</a>
      <div>
       <Button text='Login' class='btn-outline-info'/>
        &nbsp;
        <Button text='Register' class="btn-info"/>
      </div>

    </nav>
  )
}

export default Header
