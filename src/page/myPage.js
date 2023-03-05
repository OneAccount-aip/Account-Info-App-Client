import Header from "../component/common/header";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const MyPage = () => {

    useEffect(()=>{
        checkAuth()
    },[])
    const navigate = useNavigate();
    const user = {
        "id": "23d6b3e2-8853-40d1-a9c4-d740e9f5462b",
        "username": "Sungwon",
        "password": "$2a$10$7/AcnPyBi8rBNwPlvIMu..Emdbsw.jggLbv4Ey/YSTxlsl.79QNei",
        "email": "e1234",
        "roleList": [
            "ROLE_USER"
        ]
    }

    const logoutClickListener = () => {
        localStorage.clear()
        window.alert("로그아웃 되었습니다")
        navigate("/")
    }

    const checkAuth = () => {
        const token = localStorage.getItem("Authorization")
        if (token == null)
            navigate("/signin")

    }
    return (
        <Div>
            <Header/>
            <Welcome>{user.username}님, 환영합니다</Welcome>
            <Description>등록된 계좌 : 5개</Description>
            <Description>인증여부 : 인증</Description>
            <Description>가입일 : 2023.01.01</Description>
            <LogoutButton onClick={logoutClickListener}>로그아웃</LogoutButton>
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