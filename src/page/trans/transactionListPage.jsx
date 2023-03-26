import styled from "styled-components";
import Header from "../../component/common/header";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Footer from "../../component/common/footer";

const TransactionListPage = () => {

    useEffect(() => {
        getTransactionList()
        getDbTransactionList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const {state} = useLocation();
    const [accountNumber, setAccountNumber] = useState("")
    const [transactionList, setTransactionList] = useState([{
        tran_date: "",
        inout_type: "",
        tran_amt: "",
        tran_time: "",
    }])
    const date = (str) => {
        let month, day
        str[4] === '0' ? month = str.slice(5, 6) : month = str.slice(4, 6)
        str[6] === '0' ? day = str.slice(7, 8) : day = str.slice(6, 8)
        return str.slice(0, 4) + "년" + month + "월 " + day + "일"
    }
    const navigate = useNavigate()

    const depositButtonListener = () => {
        const depositData = {
            bank_name: state.bank_name,
            account_num_masked: accountNumber,
            fintech_use_num: state.fintech_use_num,
            fromAccount: state.account_num_masked
                }
        navigate("/send", {state:depositData})
    }

    const qrButtonListener=(e)=>{
        navigate("/trans/qr", {state:e})
    }

    const time = (str) => {
        const time = str.slice(2, 4)
        const minute = str.slice(4, 6)
        return time + ":" + minute
    }

    const toMoney = (num) => {
        if (num)
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        return num
    }

    const getTransactionList = () => {
        const httpRequest = {
            method: "GET",
            url: `${process.env.REACT_APP_PROXY}/transaction/account/transaction_list?fintech_use_num=${state.fintech_use_num}&from_date=20230101&to_date=20230301`,
            headers: {
                Authorization: localStorage.getItem("Authorization")
            }
        }
        // console.log(httpRequest)
        axios(httpRequest)
            .then((res) => {
                setTransactionList(res.data.res_list)
                getAccountNumber(res.data.fintech_use_num)
                console.log(res.data.res_list)
            })
    }

    const getDbTransactionList = () => {
        const httpRequest = {
            method: "GET",
            url: `${process.env.REACT_APP_PROXY}/transaction/user?num=${state.fintech_use_num}`,
            headers: {
                Authorization: localStorage.getItem("Authorization")
            }
        }
            axios(httpRequest)
            .then((res)=>{
                console.log(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    const getAccountNumber = (finNum) => {
        const httpRequest = {
            method: "GET",
            url: `${process.env.REACT_APP_PROXY}/finNum?num=${finNum}`,
            headers: {
                Authorization: localStorage.getItem("Authorization")
            }
        }
        axios(httpRequest)
            .then((res)=>{
                setAccountNumber(res.data.accountNum)
            })
            .catch((err)=>{
                console.log("err", err)
            })
    }

    return (
        <div>
            <Header/>
            <Root>
                <Account>{state.bank_name} {accountNumber}</Account>
                <Balance>{toMoney(state.balance)}원</Balance>
                <ButtonBlock>
                    <QRButton onClick={()=>qrButtonListener(state.fintech_use_num)}>QR코드</QRButton>
                    <TransButton onClick={depositButtonListener}>보내기</TransButton>
                </ButtonBlock>

            </Root>
            <Root>
                {transactionList.map((t, index) => {
                    return (
                        <div key={index}>
                            <Date>{date(t.tran_date)}</Date>
                            <CardBlock>
                                <Card>
                                    <Image
                                        src={"https://cdn-icons-png.flaticon.com/512/10128/10128727.png"}/>
                                </Card>
                                <Card>
                                    <Description>{t.print_content}</Description>
                                    <Time>{time(t.tran_time)}</Time>
                                </Card>
                                <BalanceCard>
                                    {t.inout_type === "입금" ? <RedAmount>+ {toMoney(t.tran_amt)}원</RedAmount> :
                                        <BlueAmount>- {toMoney(t.tran_amt)}원</BlueAmount>}
                                    <TotalBalance>{t.after_balance_amt}원</TotalBalance>
                                </BalanceCard>
                            </CardBlock>
                        </div>
                    )
                })}
            </Root>
            <Footer/>
        </div>
    )
}
export default TransactionListPage;

const Date = styled.p`
  font-size: 0.8rem;
`

const ButtonBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
`
const QRButton = styled.button`
  width: 150px;
  height: 40px;
  margin: 5px;
  background-color: #444452;
  border-style: none;
  color: dodgerblue;
  border-radius: 20px 20px;
`

const TransButton = styled.button`
  width: 150px;
  height: 40px;
  margin: 5px;
  background-color: dodgerblue;
  border-style: none;
  color: white;
  border-radius: 20px 20px;
`

const Root = styled.div`
  background-color: #262450;
  margin: 15px;
  padding: 15px;
  border-radius: 20px;
`

const CardBlock = styled.div`
  display: flex;
  height: 70px;
  flex-direction: row;
  margin-top: 20px;
`

const Card = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
`

const BalanceCard = styled.div`
  margin-left: auto;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
`

const Image = styled.img`
  border-radius: 70%;
  width: 40px;
  height: 40px;
`

const Description = styled.p`
  font-weight: bold;
`

const Time = styled.p`
  font-size: 0.7rem;
  opacity: 70%;
`

const Balance = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`

const Account = styled.p`
  margin-top: 50px;
  margin-bottom: 10px;
  font-size: 0.3rem;
  text-decoration: underline;
`

const BlueAmount = styled.p`
  font-size: 1.2rem;
  color: dodgerblue;
  font-weight: bold;
`

const RedAmount = styled.p`
  font-size: 1.2rem;
  color: orangered;
  font-weight: bold;
`

const TotalBalance = styled.p`
  font-size: 0.7rem;
  text-align: right;
`