import Header from "../../component/common/header";
import styled from "styled-components";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";

const Index = () => {

    useEffect(() => {
        checkAuth();
    },[])

    const location = useLocation()
    const navigate = useNavigate();

    const checkAuth = () => {
        const token = localStorage.getItem("Authorization")
        if (!token)
            navigate("/signin")
        checkCertified()
    }

    const checkCertified = () => {

            const httpRequest = {
                method: "GET",
                url: `${process.env.REACT_APP_PROXY}/check`,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("Authorization")}`
                }
            }
            axios(httpRequest)
                .then((res) => {
                    if (res.data === true)
                        navigate("/accountInfo")
                    else
                        navigate(`/authPage${location.search}`)
                })

    }

    return (
        <div>
            <Header/>
            <Root>
                <AuthButton onClick={checkAuth}>로그인이 필요합니다</AuthButton>
            </Root>
        </div>
    )
}
export default Index;

const Root = styled.div`
  margin-top: 150px;
  display: flex;
`
const AuthButton = styled.button`
  justify-content: center;
  margin: auto;
  width: 300px;
  height: 40px;
  background: black;
  color: white;
  border: none;
`;