import React from 'react'

const Register = () => {
  return (
    <div className='register'>
        <div className='register-container'>
            <h1>Register</h1>
            <form className='register-form'></form>
            <div className='form-group'>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div className='form-group'>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' name='email' required />
            </div>
            <div className='form-group'>
                <label htmlFor="password"></label>
                <input type="password" id='password' name='password' required />
            </div>
            <div className='form-group'>
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id='confirm-password' name="confirm-password" required />
            </div>
            <button type='submit' className='register-btn'>Register</button>
        </div>
    </div>
  )
}

export default Register;