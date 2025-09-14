import React from 'react'

const Login = () => {
  return (
    <div className='login'>
        <div className='login-container'>
            <h1>Login</h1>
            <form className='login-form'>
                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Email' name="email" id='email' required />
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='password' name="password" id='password' required />
                </div>
                <button type="submit" className='login-btn'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login