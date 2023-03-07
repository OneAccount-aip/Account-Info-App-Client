import {useLocation, useNavigate} from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
import {useEffect, useState} from "react";
import styled from "styled-components";
import Header from "../component/common/header";

const RedirectPage = () => {

    useEffect(() => {
        get2LeggedToken()
        get3LeggedToken()
    }, [])

    const navigate = useNavigate();
    const qCode = useLocation().search;
    const authCode = queryString.parse(qCode).code

    const [cntrToken, setCntrToken] = useState()
    const [depositToken, setDepositToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [userSeqNo, setUserSeqNo] = useState()

    const get3LeggedToken = () => {
        const httpRequest = {
            method: "POST",
            url: `/auth/callback?code=${authCode}`,
        }
        axios(httpRequest)
            .then((res) => {
                setCntrToken(res.data.access_token)
                setRefreshToken(res.data.refresh_token)
                setUserSeqNo((res.data.user_seq_no))
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const get2LeggedToken = () => {
        const httpRequest = {
            method: "POST",
            url: `/auth/`,
        }
        axios(httpRequest)
            .then((res) => {
                setDepositToken(prev => res.data?.access_token || prev)
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const setInfo = () => {
        const httpRequest = {
            method: "POST",
            url: "/auth/token",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("Authorization")}`
            },
            data: {
                cntrToken: cntrToken,
                refreshToken: refreshToken,
                depositToken: depositToken
            }
        }
        console.log(httpRequest)
        axios(httpRequest)
            .then((res) => {
                console.log(res.data.code)
                navigate("/info")
            }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <Div>
            <Header/>
            <Text>정보를 등록 후 서비스를 이용하세요</Text>
            <SubmitButton onClick={setInfo}>등록</SubmitButton>
        </Div>
    )
}
export default RedirectPage;


const Div = styled.div`
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