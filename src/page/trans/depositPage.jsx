import Header from "../../component/common/header";
import styled from "styled-components";
import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import Footer from "../../component/common/footer";

const DepositPage = () => {

    const navigate = useNavigate()
    const {state} = useLocation();
    const [amount, setAmount] = useState("금액을 입력해 주세요")

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
        } else {
            console.log(state)
            window.alert(`${state.fromBank} 계좌로 ${amount}원을 송금했습니다`)
            navigate("/accountInfo")
        }
    }

    return (
        <div>
            <Header/>
            <From>{state.fromBank} {state.fromAccount}에서</From>
            <Text>{state.toBank} {state.toAccount}로</Text>
            <InputAccount>
                <Input onChange={inputAmount} type="number" placeholder={amount}/>
                <Amount>{toMoney(amount)}</Amount>
            </InputAccount>

            <Text>원을 보냅니다</Text>
            <SendButton onClick={depositClickListener}>다음</SendButton>
            <Footer/>
        </div>
    )
}
export default DepositPage;

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