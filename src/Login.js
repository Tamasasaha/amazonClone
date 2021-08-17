import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Login.css'


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const singIn = e =>{
        e.preventDefault();

        //fancy firebase login



    }

    const register = e=>{
        e.preventDefault();

        // do some fance firebase register
    }

    return (
        <div className="login">
            <Link to="/">
            <img className="login__logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMLRzc-K2zvev7GtJQZjj96rsPG3gRdSmO_q8u9H0JwhPcj_E6dosUZnWeqB7oyYuZRw&usqp=CAU"  alt=""/>
            </Link>

            <div className="login__container">
                    <h1>Sign in</h1>

                    <form>
                        <h5>E-mail</h5>
                        <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>

                        <h5>Password</h5>
                        <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>

                        <button type= "submit"  onclick={singIn} className="login__SignInButton">Sign in</button>

                    </form>

                    <p>
                        By signing-in you agree to Amazon's Conditions of Use & Sale. Please
                        see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
                        Notice.
                    </p>

                    <button onclick={register} className="login__RegisterButton">
                        Create Your Amazon Account
                    </button>

            </div>


        </div>
    )
}

export default Login
