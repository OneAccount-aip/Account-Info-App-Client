import Header from "../component/common/header";
import styled from "styled-components";
import UserInfo from "../component/account/userInfo";

const DepositPage = () => {
  return(
      <div>
        <Header/>
          <Text>어디로 돈을 보낼까요?</Text>
          <Input type="number" placeholder="계좌번호 입력"/>
          <Text>내 계좌</Text>
          <AccountBlock>
              <UserInfo/>
          </AccountBlock>
          <Text>최근 보낸 계좌</Text>
          <AccountBlock>
              <UserInfo/>
          </AccountBlock>
      </div>
  )
}
export default DepositPage;

const AccountBlock = styled.div`
  background-color: #232328;
  margin: 15px;
  padding: 15px;
  border-radius: 20px;
`

const Text = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 20px;
`

const Input = styled.input`
  background-color: transparent;
  border-style: none;
  border-bottom: solid #424250;
  margin: 20px;
  width: 90%;
  align-items: center;
  outline: none;
  color: white;
  font-size: 1.3rem;
`