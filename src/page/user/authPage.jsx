import Header from "../../component/common/header";
import {useLocation, useNavigate} from "react-router-dom";
import styled from "styled-components";
import {useEffect, useState} from "react";
import queryString from "query-string";
import {store2LeggedTokenApi, store3LeggedTokenApi, storeUserAuthApi} from "../../api/user";

const AuthPage = () => {

    const navigate = useNavigate();
    const location = useLocation()
    const qCode = useLocation().search;
    const authCode = queryString.parse(qCode).code

    const [redirected, setRedirected] = useState(false)
    const [cntrToken, setCntrToken] = useState()
    const [depositToken, setDepositToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [userSeqNo, setUserSeqNo] = useState()
    const [clientUseCode, setClientUseCode] = useState()

    useEffect(() => {
        checkIsRedirected()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const checkIsRedirected = () => {
        if (location.search[0] === '?') {
            setRedirected(true)
            get3LeggedToken()
            get2LeggedToken()
        }
    }

    const get3LeggedToken = () => {
        store3LeggedTokenApi(authCode, setCntrToken, setRefreshToken, setUserSeqNo);
    }

    const get2LeggedToken = () => {
        store2LeggedTokenApi(setDepositToken, setClientUseCode);
    }

    const setInfo = () => {
        storeUserAuthApi(cntrToken, refreshToken, depositToken, userSeqNo, clientUseCode, navigate);
    }

    const authHandleClick = () => {
        let tmpWindow = window.open("about:blank")
        const clientId = process.env.REACT_APP_CLIENTID
        const redirect_uri = process.env.REACT_APP_REDIRECT_URI
        const scope = process.env.REACT_APP_SCOPE
        const state = process.env.REACT_APP_STATE
        const auth_type = process.env.REACT_APP_AUTH_TYPE
        tmpWindow.location.href = `${process.env.REACT_APP_TEST_API_URL}?response_type=code&client_id=${clientId}&redirect_uri=${redirect_uri}&scope=${scope}&state=${state}&auth_type=${auth_type}`
    };

    const logoutHandleClick = () => {
        localStorage.clear()
        window.alert("로그아웃 되었습니다")
    }

    const pageHandleClick = () => {
        navigate("/info")
    }
    return (
        <div>
            <Header/>
            {redirected ?
                <Root>
                    <Text>정보를 등록 후 서비스를 이용하세요</Text>
                    <SubmitButton onClick={setInfo}>등록</SubmitButton>
                </Root>
                :
                <Root>
                    <P>계좌 인증 후 이용하실 수 있습니다.</P>
                    <AuthButton onClick={authHandleClick}>인증하러가기</AuthButton>
                    <LogoutButton onClick={logoutHandleClick}>로그아웃</LogoutButton>
                    <PageButton onClick={pageHandleClick}>홈페이지가기</PageButton>
                </Root>
            }
        </div>
    )
}
export default AuthPage;

const Root = styled.div`
  display: flex;
  flex-direction: column;
`
const Text = styled.div`
  margin: 50px;
  text-align: center;
`

const SubmitButton = styled.button`
  justify-content: center;
  margin: auto;
  width: 300px;
  height: 40px;
  background: dodgerblue;
  color: white;
  border: none;
`;
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