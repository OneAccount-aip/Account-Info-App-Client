import Header from "../../component/common/header";
import styled from "styled-components";
import UserInfo from "../../component/account/userInfo";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import Footer from "../../component/common/footer";
// import {setBankIcon} from "../../component/asset/asset";
import {getAccountNumByFinNumApi} from "../../api/account";
import Keypad from "../../component/common/keypad";

const SendPage = message => {

    const navigate = useNavigate()
    const [fromAccountNum, setFromAccountNum] = useState("")
    const [toAccountNum, setToAccountNum] = useState("")
    const [accountBank, setAccountBank] = useState("은행 선택")
    // const [searchAccount, setSearchAccount] = useState([])
    const {state} = useLocation();

    useEffect(() => {
        getAccountNumber(state.fintech_use_num)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getAccountNumber = (finNum) => {
        getAccountNumByFinNumApi(finNum, setFromAccountNum);
    }

    const inputAccountBank = (e) => {
        const {value} = e.target;
        setAccountBank(value);
    }

    const accountClickListener = (e) => {
        setToAccountNum(e.account_num_masked);
        setAccountBank(e.bank_name);
    }

    const sendButtonListener = () => {
        console.log(toAccountNum, accountBank)
        window.alert(accountBank + toAccountNum + "\n위의 주소로 송금 하시겠어요?")
    }

    const depositClickListener = (e) => {
        const fromToAccount = {
            fromFinNum: state.fintech_use_num,
            toAccount: fromAccountNum,
            fromBank: state.bank_name,
            fromAccount: state.account_num_masked,
            toBank: state.toBank,
            toUser: e.username
        }

        console.log(fromToAccount)
        navigate("/deposit", {state: fromToAccount})
    }

    return (
        <div>
            <Header/>
            <From>{state.bank_name}{fromAccountNum}에서</From>
            <Text>어디로 돈을 보낼까요?</Text>
            <InputAccount>
                <Input type="number" placeholder={toAccountNum}/>
                <Keypad onChange={setToAccountNum} value={toAccountNum}/>
                <SelectBank onChange={inputAccountBank} value={accountBank}>
                    <option value={"none"}>{accountBank}</option>
                    <option key={"KB국민은행"} value={"KB국민은행"}>KB국민은행</option>
                    <option key={"부산은행"} value={"부산은행"}>부산은행</option>
                    <option key={"SC제일은행"} value={"SC제일은행"}>SC제일은행</option>
                    <option key={"농협중앙회"} value={"농협중앙회"}>농협중앙회</option>
                    <option key={"KDB산업은행"} value={"KDB산업은행"}>KDB산업은행</option>
                    <option key={"수협은행"} value={"수협은행"}>수협은행</option>
                    <option key={"하나은행"} value={"하나은행"}>하나은행</option>
                </SelectBank>
                <SendButton onClick={sendButtonListener}>송금</SendButton>
            </InputAccount>
            {/*{searchAccount.length > 0 ?*/}
            {/*    <div>*/}
            {/*        <Text>검색 결과</Text>*/}
            {/*        <AccountBlock>*/}
            {/*            {searchAccount.map((v) => {*/}
            {/*                console.log(v)*/}
            {/*                return <CardBlock>*/}
            {/*                    <Image src={setBankIcon(v.bankCode)}></Image>*/}
            {/*                    <Card>*/}
            {/*                        <Username>{v.username}</Username>*/}
            {/*                        <AccountNum>{v.accountNum}</AccountNum>*/}
            {/*                    </Card>*/}
            {/*                    <DepositButton onClick={() => depositClickListener(v)}>송금</DepositButton>*/}
            {/*                </CardBlock>*/}
            {/*            })}*/}
            {/*        </AccountBlock>*/}
            {/*    </div> : <div/>*/}
            {/*}*/}
            <Text>내 계좌</Text>
            <AccountBlock>
                <UserInfo accountClickListener={accountClickListener} depositClickListener={depositClickListener}/>
            </AccountBlock>
            <Footer/>
        </div>
    )
}
export default SendPage;

const AccountBlock = styled.div`
  background-color: #262450;
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
  background-color: #262450;
  color: white;
  margin-right: 10px;
  border-style: none;
  border-radius: 10%;
  appearance: none;
  text-align-last: center;
  text-align: center;
`

const SendButton = styled.button`
  height: 50px;
  width: 80px;
  background-color: #262450;
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

// const CardBlock = styled.div`
//   display: flex;
//   height: 70px;
//   flex-direction: row;
//   margin-top: 20px;
//   border-radius: 30px;
//   background-color: #19173D;
// `

// const Card = styled.div`
//   padding-left: 20px;
//   display: flex;
//   flex-direction: column;
// `
//
// const Image = styled.img`
//   margin-left: 20px;
//   margin-top: 13px;
//   border-radius: 70%;
//   width: 40px;
//   height: 40px;
// `
//
// const AccountNum = styled.p`
//   font-size: 0.8rem;
//   font-weight: bold;
// `
//
// const Username = styled.p`
//   margin-top: 15px;
//   font-size: 1rem;
// `
//
// const DepositButton = styled.button`
//   min-width: 50px;
//   height: 35px;
//   background-color: #19173D;
//   color: white;
//   border: 1px solid #262450;
//   border-radius: 20px;
//   margin-top: 15px;
//   margin-left: auto;
//   margin-right: 10px;
// `