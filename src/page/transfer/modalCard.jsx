import styled from "styled-components";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const ModalCard = ({fromFinNum, bankName, balance, toFinNum}) => {
    const [amount, setAmount] = useState()
    const [toAccount, setToAccount] = useState()
    const navigate = useNavigate()
    const toMoney = (num) => {
        if (num)
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        return num
    }
    const inputHandleChange = (e) => {
        const {value} = e.target;
        setAmount(value);
    }

    const onClickListener = async () => {
        const getAccountRequest = {
            method: "GET",
            url: `${process.env.REACT_APP_PROXY}/finNum?num=${toFinNum}`,
        }
        const result = await axios(getAccountRequest)
        const toAccount = result.data.accountNum
        setToAccount(toAccount)

        const transferRequest = {
            method: "POST",
            url: `${process.env.REACT_APP_PROXY}/transaction/transfer`,
            data: {
                fromFinNum: fromFinNum,
                toAccount: toAccount,
                amount: amount,
                content: "앱송금"
            }
        }
        console.log(transferRequest)
        axios(transferRequest)
            .then((res) => {
                console.log(res)
                window.alert(`${bankName} 계좌로 ${amount}원을 송금했습니다`)
                navigate("/accountInfo")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <ModalCardBlock>
            <CardBlock>
                <BankName>{bankName}</BankName>
                <AccountNum>{toAccount}</AccountNum>
                <Image src={"https://cdn-icons-png.flaticon.com/512/6404/6404078.png"}/>
                <Balance>잔액 : {toMoney(balance)}원</Balance>
            </CardBlock>
            <ButtonBlock>
                <InputBalance onChange={inputHandleChange}/>
                <WithDrawButton onClick={onClickListener}>결제하기</WithDrawButton>
            </ButtonBlock>
        </ModalCardBlock>
    )
}
export default ModalCard

const ModalCardBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 20px;
  border: 1px #112211 solid;
  border-radius: 20px 20px;
  background-color: #19173D;
  color: white;
`

const ButtonBlock = styled.div`
  flex-direction: column;
  justify-content: center;
  margin: auto;
`
const BankName = styled.p`
  font-size: 0.8rem;
`

const AccountNum = styled.p`
  margin-bottom: 20px;
`

const Balance = styled.p`
  font-size: 0.8rem;
  background-color: #4C489D;
  border-radius: 20px 20px;
  padding: 10px;
`

const Image = styled.img`
  margin-bottom: 10px;
  width: 40px;
`

const InputBalance = styled.input`
  padding: 0.2rem;
`

const WithDrawButton = styled.button`
  margin-left: 10px;
  border: none;
  font-size: 0.8rem;
  padding: 0.3rem;
  background: #19173D;
  color: white;
  margin-top: 0.3rem;
  border-radius: 5px 5px;
`;