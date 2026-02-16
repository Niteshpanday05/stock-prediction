import React from 'react'

const Register = () => {
  return (
   <>
   <div className="container">
    <div className="row justify-content-center p-2px">
      <div className="col-md-6 bg-light-dark p-2px">
        <h3 className="text-light text-center">Create an Account</h3>
        <form>
          <input type="text" className='form-control mb-3' placeholder='Enter username' />
          <input type="Email" className='form-control mb-3' placeholder='Enter email address' />
           <input type="Password" className='form-control mb-3' placeholder='Enter password' />
           <button type='Submit' className='btn btn-info d-block mx-auto'>Register</button>
        </form>
      </div>
    </div>
   </div>
   </>
  )
}

export default Register
