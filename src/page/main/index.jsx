import Header from "../../component/common/header";
import styled from "styled-components";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {certificateCheckApi} from "../../api/user";

const Index = () => {

    useEffect(() => {
        checkAuth();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const location = useLocation()
    const navigate = useNavigate();

    const checkAuth = () => {
        const token = localStorage.getItem("Authorization")
        if (!token)
            navigate("/signin")
        else
            checkCertified()
    }

    const checkCertified = () => {
        certificateCheckApi(navigate, location);
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