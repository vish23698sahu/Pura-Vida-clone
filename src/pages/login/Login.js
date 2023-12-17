import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css';

const Login = () => {
    return (
        <div className='login__container' >
            <div className='login__box' >
                <form>
                    <h2 className='login__h2' >Login</h2>
                    {/* {validForm ? '' : <p className='login__valid'>Please enter email and password</p>} */}
                    {/* {invalidCredentials === true ? <p className='login__valid' id='login_fail'>Please enter valid email and password combination</p> : ''} */}
                    <input className='login__email' type='text' placeholder='email' /><br /><br />
                    {/* onChange={emailChangeHandler} */}
                    {/* value={email} */}

                    <input className='login__password' type='password' placeholder='password' /><br />
                    {/* password={password} */}
                    {/* onChange={passwordChangeHandler} */}

                    <button className='login__login' >Login</button><br /><br /><br />
                    {/* onClick={loginClickHandler} */}
                    <hr /><br /><br />
                    <div>
                        Don't have an account ? <Link to='/register' className='login__signUp'>Sign Up</Link>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login