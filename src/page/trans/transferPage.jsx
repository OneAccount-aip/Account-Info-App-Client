import Header from "../../component/common/header";
import styled from "styled-components";
import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import Footer from "../../component/common/footer";
import {transferApi} from "../../api/account";
import Keypad from "../../component/common/keypad";

const TransferPage = () => {

    const {state} = useLocation();
    const [amount, setAmount] = useState("금액을 입력해 주세요")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const inputAmount = (e) => {
        const {value} = e.target;
        setAmount(value);
    }

    const toMoney = (num) => {
        if (num === "금액을 입력해 주세요")
            return 0
        else if (num)
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        return num
    }

    const depositClickListener = () => {
        if (state.fromBank === "" || state.fromAccount === "") {
            window.alert("보내는 은행 선택")
        } else if (amount <= 0) {
            window.alert("금액을 입력해 주세요")
        } else {
            transferApi(state.fromFinNum, state.toAccount, state.fromBank, amount, navigate);
        }
        console.log(state)
    }

    const passwordMasking=()=>{
        let str = ""
        for (let i = 0; i < password.length; i++) {
            str+="*"
        }
        return str
    }

    console.log(state, amount)
    return (
        <div>
            <Header/>
            <From>{state.fromBank} {state.fromAccount}에서</From>
            <Text>최성원님의 계좌 {state.toAccount}로</Text>
            <InputAccount>
                <Input onChange={inputAmount} type="number" placeholder={amount}/>
                <Amount>{toMoney(amount)}</Amount>
            </InputAccount>

            <Text>원을 보냅니다</Text>
            {password.length>3?
                <SendButton onClick={depositClickListener}>다음</SendButton>
                :<div>
                    <Keypad onChange={setPassword} value={password}/>
                    <InputPasswordText>2차 인증 비밀번호</InputPasswordText>
                    <Password>{passwordMasking()}</Password>
                </div>}
            <Footer/>
        </div>
    )
}
export default TransferPage;

const Amount = styled.p`
  margin: 15px;
  padding: 15px;
  color: grey;
`

const From = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 20px;
`

const Text = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 20px;
`

const InputAccount = styled.div`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  background-color: transparent;
  border-style: none;
  border-bottom: solid #424250;
  margin: 20px;
  width: 80%;
  align-items: center;
  outline: none;
  color: white;
  font-size: 1.3rem;
`
const SendButton = styled.button`
  width: 100%;
  height: 50px;
  background: dodgerblue;
  font-size: 0.8rem;
  color: white;
  border: none;
`

const Password = styled.p`
  border-bottom: 1px solid;
  align-items: center;
  text-align: center;
  margin: 20px;
`

const InputPasswordText = styled.p`
  margin-top: 50px;
  align-items: center;
  text-align: center;
`