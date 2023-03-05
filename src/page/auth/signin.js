import React from "react";
import './sign.css'
import Header from "../../component/common/header";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {

    const navigate = useNavigate();
    const[username, setUsername] = useState();
    const[password, setPassword] = useState();

    const signinClickListener=()=>{
        const request = {
            method : "POST",
            url : "/login",
            data : {
                username : username,
                password : password,
            }
        }
        console.log(request)
        axios(request).then((res)=>{
            window.alert("로그인 완료")
            localStorage.setItem("Authorization", res.headers.authorization)
            navigate("/")
        }).catch((err)=>{
            window.alert(err.message)
        })
    }

    const signupClickListener = () => {
      navigate("/signup")
    }

    const inputUsername=(e)=>{
        const {value} = e.target;
        setUsername(value);
    }

    const inputPassword=(e)=>{
        const {value} = e.target;
        setPassword(value);
    }

    return (
        <div>
            <Header/>
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <div className="login">
                            <h1>Sign In</h1>
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input onChange={inputUsername} type="text" className="login__input" placeholder="User name"/>
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input onChange={inputPassword} type="password" className="login__input" placeholder="Password"/>
                            </div>
                            <button className="button login__submit" onClick={signinClickListener}>
                                <span className="button__text">Sign In</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                        </div>
                        <div onClick={signupClickListener} className="social-login">
                            <h3>Sign Up ></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signin;