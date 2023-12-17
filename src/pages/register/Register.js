import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css';

const Register = () => {
    return (
        <div className='register__container' >
            <div className='register__box' >
                <form>
                    <h2 className='register__h2' >Sign Up</h2>
                    {/* {validForm ? '' : <p className='register__valid'>Please enter email and password</p>} */}
                    <input className='register__email' type='text' placeholder='email' /><br /><br />
                    {/* value={email} */}
                    {/* onChange={emailChangeHandler} */}
                    <input className='register__password' type='password' placeholder='password' /><br />
                    {/* password={password} */}
                    {/* onChange={passwordChangeHandler} */}

                    <button className='register__signUp' >Sign Up</button><br /><br /><br />
                    {/* onClick={signUpClickHandler} */}
                    <hr /><br /><br />
                    <div>
                        Existing User ? <Link to='/login' className='register__login'>Log In</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
