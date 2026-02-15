import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
     <div className='container'>
      <div className='p-5 text-center bg-light-dark'>
        <h1 className=' title '>Stock Prediction Portol</h1>
        <p className='content lead'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
           Consequuntur optio praesentium minima recusandae dolorem fuga sapiente. Aspernatur, laborum. Ducimus iusto veritatis cumque, consectetur dolore necessitatibus repudiandae? Architecto possimus autem maxime?</p>
             <Button text='login' class='btn-outline-info' />
      </div>
    </div>
    </>
   
  )
}

export default Main;
