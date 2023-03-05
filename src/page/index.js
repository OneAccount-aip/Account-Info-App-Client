import Header from "../component/common/header";
import styled from "styled-components";
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";
const Index = () => {

    const navigate = useNavigate();

    const authHandleClick = () => {
        let tmpWindow = window.open("about:blank");
        const clientId = "2d720bca-aaea-46b6-9943-274bb39a5f8a";
        const redirect_uri = "http://localhost:3000/auth/callback";
        const scope = "login inquiry transfer"
        const state = "b80BLsfigm9OokPTjy03elbJqRHOfGSY"
        const auth_type = 0
        tmpWindow.location.href = `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirect_uri}&scope=${scope}&state=${state}&auth_type=${auth_type}`
    };

    const logoutHandleClick = () => {
      localStorage.clear()
      window.alert("로그아웃 되었습니다")
    }
    
    const pageHandleClick = () => {
      navigate("/info")
    }

    return (
        <motion.div>
            <Header/>
            <Root>
                <P>계좌 인증 후 이용하실 수 있습니다.</P>
                <AuthButton onClick={authHandleClick}>인증하러가기</AuthButton>
                <LogoutButton onClick={logoutHandleClick}>로그아웃</LogoutButton>
                <PageButton onClick={pageHandleClick}>홈페이지가기</PageButton>
            </Root>
        </motion.div>
    )
}
export default Index;

const Root = styled.div`
  display: flex;
  flex-direction: column;
`

const P = styled.p`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
`
const AuthButton = styled.button`
  justify-content: center;
  margin: auto;
  width: 300px;
  height: 40px;
  background: orange;
  color: white;
  border: none;
`;

const LogoutButton = styled.button`
  justify-content: center;
  margin: auto;
  width: 300px;
  height: 40px;
  background: dodgerblue;
  color: white;
  border: none;
`;

const PageButton = styled.button`
  justify-content: center;
  margin: auto;
  width: 300px;
  height: 40px;
  background: #4C489D;
  color: white;
  border: none;
`;