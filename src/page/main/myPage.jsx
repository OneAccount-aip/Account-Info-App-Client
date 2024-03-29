import Header from "../../component/common/header";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Footer from "../../component/common/footer";
import {userInfoApi} from "../../api/user";

const MyPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        checkAuth();
        getUserInfo();
        // eslint-disable-next-line
    }, [])

    const [user, setUser] = useState({});

    const checkAuth = () => {
        const token = localStorage.getItem("Authorization")
        if (!token) navigate("/signin")
    }

    const getUserInfo = () => {
        userInfoApi(setUser);
    }

    const logoutClickListener = () => {
        localStorage.clear()
        window.alert("로그아웃 되었습니다")
        navigate("/")
    }

    const value = (v) => {
        return v ? v.toString() : v
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