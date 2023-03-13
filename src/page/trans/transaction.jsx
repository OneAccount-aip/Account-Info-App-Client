import styled from "styled-components";
import Header from "../../component/common/header";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Footer from "../../component/common/footer";

const Transaction = () => {

    useEffect(() => {
        getTransactionList()
    }, [])

    const {state} = useLocation();
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
            account_num_masked: state.account_num_masked
                }
        navigate("/send", {state:depositData})
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
        axios(httpRequest)
            .then((res) => {
                setTransactionList(res.data.res_list)
                console.log(res)
            })
    }

    return (
        <div>
            <Header/>
            <Root>
                <Account>{state.bank_name} {state.account_num_masked}</Account>
                <Balance>{toMoney(state.balance)}원</Balance>
                <DepositButton>채우기</DepositButton>
                <TransButton onClick={depositButtonListener}>보내기</TransButton>
            </Root>
            <Root>
                {transactionList.map((t, index) => {
                    return (
                        <div key={index}>
                            <Date>{date(t.tran_date)}</Date>
                            <CardBlock>
                                <Card>
                                    <Image
                                        src={"https://lh3.googleusercontent.com/8PydoWI_sr5TI5zC2hl6H13-iRpad3wvX2zAEoEzzboOZBWkAd-YwmCiCCfzF3816A"}/>
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
export default Transaction;

const Date = styled.p`
  font-size: 0.8rem;
`

const DepositButton = styled.button`
  width: 150px;
  height: 40px;
  margin: 5px;
  background-color: #444452;
  border-style: none;
  color: dodgerblue;
  border-radius: 20%;
`

const TransButton = styled.button`
  width: 150px;
  height: 40px;
  margin: 5px;
  background-color: dodgerblue;
  border-style: none;
  color: white;
  border-radius: 20%;
`

const Root = styled.div`
  background-color: #232328;
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
  padding-left: 20px;
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