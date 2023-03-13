import Header from "../../component/common/header";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Footer from "../../component/common/footer";

const MyPage = () => {

    const navigate = useNavigate();

    useEffect(()=>{
        checkAuth();
        getUserInfo();
    },[])

    const [user, setUser] = useState({
    });

    const checkAuth = () => {
        const token = localStorage.getItem("Authorization")
        if (!token) navigate("/signin")
    }

    const getUserInfo=()=>{
        const httpRequest = {
            method : "GET",
            url : `${process.env.REACT_APP_PROXY}/user`,
            headers : {
                Authorization: `Bearer ${localStorage.getItem("Authorization")}`
            }
        }
        axios(httpRequest)
            .then((res)=>{
                setUser(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    const logoutClickListener = () => {
        localStorage.clear()
        window.alert("로그아웃 되었습니다")
        navigate("/")
    }

    const value = (v)=>{
        return v?v.toString():v
    }
    return (
        <Div>
            <Header/>
            <Welcome>{user.name}님, 환영합니다</Welcome>
            <Description>가입 메일 : {user.email}</Description>
            <Description>인증여부 : {value(user.isCertified)}</Description>
            <Description>가입일 : {user.createAt}</Description>
            <LogoutButton onClick={logoutClickListener}>로그아웃</LogoutButton>
            <Footer/>
        </Div>
    )
}
export default MyPage;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`
const Welcome = styled.h2`
  padding: 20px;
`

const Description = styled.p`
  padding: 20px;
`

const LogoutButton = styled.button`
  justify-content: center;
  margin: auto;
  width: 300px;
  height: 40px;
  background: dodgerblue;
  color: white;
  border: none;
`;