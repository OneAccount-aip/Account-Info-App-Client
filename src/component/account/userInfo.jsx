import styled from "styled-components";
import {useEffect, useState} from "react";
import {accountBalanceApi, accountListApi} from "../../api/account";
import {setBankIcon} from "../asset/asset";

const UserInfo = ({accountClickListener, depositClickListener}) => {

    useEffect(() => {
        getUserInfo()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [userInfo, setUserInfo] = useState([]);

    const getUserInfo = async () => {
        const a = await accountListApi(getAccountBalance);
        setUserInfo(a)
    }

    const getAccountBalance = async (fintechUseNum) => {
        return await accountBalanceApi(fintechUseNum);
    }

    const toMoney = (num) => {
        if (num)
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        return num
    }

    return (
        <div>{userInfo.map((i, index) => {
                return (
                    <CardBlock key={index}>
                        <Image src={setBankIcon(i.bank_name)}/>
                        <Card onClick={() => accountClickListener(i)}>
                            <AccountName>{i.account_alias}</AccountName>
                            <Balance>{toMoney(i.balance)}원</Balance>
                        </Card>
                        <DepositButton onClick={() => depositClickListener(i)}>송금</DepositButton>
                    </CardBlock>
                )
            }
        )}</div>
    )
}
export default UserInfo;

const AccountName = styled.p`
  font-size: 0.8rem;
`

const Balance = styled.p`
  font-size: 1rem;
  font-weight: bold;
`

const Image = styled.img`
  margin-left: 20px;
  margin-top: 13px;
  border-radius: 70%;
  width: 40px;
  height: 40px;
`
const CardBlock = styled.div`
  display: flex;
  height: 70px;
  flex-direction: row;
  margin-top: 20px;
  border-radius: 30px;
  background-color: #19173D;
`

const Card = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`

const DepositButton = styled.button`
  min-width: 50px;
  height: 35px;
  background-color: #19173D;
  color: white;
  border: 1px solid #262450;
  border-radius: 20px;
  margin-top: 15px;
  margin-left: auto;
  margin-right: 10px;
`