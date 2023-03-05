import "./sign.css"
import Header from "../../component/common/header";
import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate();
    const[username, setUsername] = useState();
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();

    const signupClickListener=()=>{
        const request = {
            method : "POST",
            url : "/signup",
            data : {
                username : username,
                password : password,
                email : email
            }
        }
        console.log(request)
        axios(request).then((res)=>{
            window.alert(res.data.id+" id로 계정 생성")
            navigate("/signin")
        }).catch((err)=>{
            window.alert(err)
        })
    }

    const inputUsername=(e)=>{
        const {value} = e.target;
        setUsername(value);
    }

    const inputEmail=(e)=>{
        const {value} = e.target;
        setEmail(value);
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
                            <h1>SignUp</h1>
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input onChange={inputUsername} type="text" className="login__input" placeholder="Username"/>
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input onChange={inputEmail} type="email" className="login__input" placeholder="Email"/>
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input onChange={inputPassword} type="password" className="login__input" placeholder="Password"/>
                            </div>
                            <button className="button login__submit" onClick={signupClickListener}>
                                <span className="button__text">Sign Up</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signup;