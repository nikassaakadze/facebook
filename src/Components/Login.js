import React, {useState, useEffect} from 'react'
import '../custom/login.css'
import {auth, provider} from '../firebase'
import 'antd/dist/antd.css';

function Login() {

	const Signin = () => {
		auth.signInWithPopup(provider).then(function(result) {
			console.log(result)
		})
		.catch(function(error){alert(error.message)})
	}

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" 
                alt="facebppk_logo"/>
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                alt="facebook-logo" />
                <button type="submit" onClick={Signin}>SIGNIN</button>
            </div>
        </div>
    )
}

export default Login
