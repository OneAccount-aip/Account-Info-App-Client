import styled from "styled-components";
import UserInfo from "../component/account/userInfo";
import Header from "../component/common/header";

const UserInfoPage = () => {

    return (
        <div>
            <Header/>
            <Root>
                <BalanceText>자산</BalanceText>
                <UserInfo/>
            </Root>
        </div>
    )
}
export default UserInfoPage;

const BalanceText = styled.p`
  margin: 8px;
  font-size: 1.3rem;
  font-weight: bold;
`

const Root = styled.div`
  background-color: #232328;
  margin: 15px;
  padding: 15px;
  border-radius: 20px;
`