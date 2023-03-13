import Header from "../../component/common/header";
import styled from "styled-components";
import UserInfo from "../../component/account/userInfo";
import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import Footer from "../../component/common/footer";

const SendPage = () => {

    const navigate = useNavigate()
    const[accountNum, setAccountNum] = useState("계좌번호 입력")
    const[accountBank, setAccountBank] = useState("은행 선택")
    const {state} = useLocation();

    const inputAccountNum=(e)=>{
        const {value} = e.target;
        setAccountNum(value);
    }

    const inputAccountBank=(e)=>{
        const {value} = e.target;
        setAccountBank(value);
    }

    const accountClickListener=(e)=>{
        setAccountNum(e.account_num_masked);
        setAccountBank(e.bank_name);
    }

    const depositClickListener = (e) => {
        const fromToAccount = {
            fromAccount : state.account_num_masked,
            fromBank : state.bank_name,
            toAccount : e.account_num_masked,
            toBank : e.bank_name
        }
        if (e.account_num_masked.at(-1)==="*")
            navigate("/deposit", {state:fromToAccount})
    }

    return (
        <div>
            <Header/>
            <From>{state.bank_name}{state.account_num_masked}에서</From>
            <Text>어디로 돈을 보낼까요?</Text>
            <InputAccount>
                <Input onChange = {inputAccountNum} type="number" placeholder={accountNum}/>
                <SelectBank onChange = {inputAccountBank} value={accountBank}>
                    <option value={"none"}>{accountBank}</option>
                    <option key={"KB국민은행"} value={"KB국민은행"}>KB국민은행</option>
                    <option key={"부산은행"} value={"부산은행"}>부산은행</option>
                    <option key={"SC제일은행"} value={"SC제일은행"}>SC제일은행</option>
                    <option key={"농협중앙회"} value={"농협중앙회"}>농협중앙회</option>
                    <option key={"KDB산업은행"} value={"KDB산업은행"}>KDB산업은행</option>
                    <option key={"수협은행"} value={"수협은행"}>수협은행</option>
                    <option key={"하나은행"} value={"하나은행"}>하나은행</option>
                </SelectBank>
            </InputAccount>
            <Text>내 계좌</Text>
            <AccountBlock>
                <UserInfo accountClickListener={accountClickListener} depositClickListener={depositClickListener}/>
            </AccountBlock>
            <Text>최근 보낸 계좌</Text>
            <AccountBlock>
                <UserInfo/>
            </AccountBlock>
            <Footer/>
        </div>
    )
}
export default SendPage;

const AccountBlock = styled.div`
  background-color: #232328;
  margin: 15px;
  padding: 15px;
  border-radius: 20px;
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
  flex-direction: row;
`

const SelectBank = styled.select`
  height: 50px;
  width: 80px;
  background-color: #232328;
  color: white;
  margin-right: 10px;
  border-style: none;
  border-radius: 10%;
  appearance: none;
  text-align-last: center;
  text-align: center;
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