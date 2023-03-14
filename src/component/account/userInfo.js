import styled from "styled-components";
import axios from "axios";
import {useEffect, useState} from "react";

const UserInfo = ({accountClickListener, depositClickListener}) => {

    useEffect(() => {
        getUserInfo()
    }, [])

    const [userInfo, setUserInfo] = useState([]);

    const setBankIcon = (name) => {
        let url = ""
        if (name === "KB국민은행")
            url = "https://apprecs.org/gp/images/app-icons/300/8b/com.kbstar.kbbank.jpg"
        else if (name === "부산은행")
            url = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAhFBMVEX////XGSHrjJDXHCT75ufbMjnvo6bZIyvzubv99PXjXmT//Pz87e7ndXrfSU/99vbhU1n53d70wMLYISneQ0r1xcfum57dPUTbLzbwqq3xsbPoen7gTlT64uPkY2j42drqhIncNz7mbnPslJf3ztDiWF7qiIz2y83vpqn309TkYmjytbgKcZdNAAAF1ElEQVR4nO2a23qqPBCGRVBUcEPdsKk7pKtdtvd/f79ahRkygQT9D9bzfO9hm0DeQCYzwV4PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8awSjfgubdL0bB0LX+ZC1eovEVjd2Rdmw2En937QDnHtfWdlwONe3+3ZacJf+YPH5FipdvQFt5V5bfWhU/rplQ38k9Z/KHYNouM/9Zdl74GlFxpM2kfv9F8O6ChP5JZkexLsMu4mEReyy679A5DLn2xF/sIKI46zEl6SbSLRf1q7+EpHLGI7soYgiTi6ZdBLZqUN7kYjjnqiJLOLMoteIzKfqtV8l4rjTcauI864OqotI5v+PIs6yqO6oE0m+XiESLoRLv07Eyc+tIs5RGVUHkZHwQJpEgv6siVVSDxzVixPuy1YD1ipWVom9yPxEr+gm8e1Ge3U3q3qEjRzSPZ+auNyZe+OyVZQuSMB3i+dFvhJyz7w4e7f7jHtPMM9iKrLMxFYencFtfeKsRYIjnTt10XVjnVOTo9woWjXIWotEZPJ8eeo6EPSpyEmTTxXk5fquJXfWIht6MbMXKvQqdLnlmb6wk0ergPQc80lM1s+JhNuGxysznyaDkqGmkUffrcljgrxZ2THZ1F7r2qZoK5KRKKgsOBm2j/Q1jSK6Y+wfT4QO5NqTBpqcZ8GWIvN99R81BD4hQifIOUoDufZkoZ/f3lJkTadESN26ing0W3D/6kTYZjxje7CdSPBO7idkbl1FvBOtbgblS6OI0PSo8rUXOeTVP4TErZtI4KVbVqVV0VcRYUFzQoOmnQgN5Ht9ld4gslBOHj5PK55sDaoZUkV2dBujBZaViDer/r78MfSwzX7dvpzG35/lJ2lKx2YlktrHXmsRbWF1F/kg4WZQJfxWInRE7sbUw06EF+2CSEAj8Gc3kTcS+0iq/UKR5TZjK08QYaNYVaOwEAloqa6WaK8QiX/4ZSWR8Z/qb26V8ViInMlfkw9jDxsRN5meaVdJhJ4pOovyRbQQoZm2LtF+UuRCntIwKYl4pCypxmwuIvd/uYjja05Rqq2UzehjTZmLqE+0S4ri+gr1swdSrski4jtuLKKusWBolqQwkdNIIev/qR0+6HOtG2LUMRaheefqlndGsXR02SIiJo3jET8qK7cHWaS3pvtAZCci7EOX/K3pEMhC5JJCkTrnMVF6EWlnNhVRM4Nr0eu+G2SORoXVgYSSKhvUiEi5kqEIq5Z//3Sr6Zab9hVvJMJCkfPIf3QiLHvNbETU7Ple9CbtBxBmIjTzKFvpRIR6wlBErWceRW/eGrrMRL6sRNQKz0yEVpjL9NqkKnq3baHLTIRuU+0ias1tJvJDFtdvzU+mpC10GYnwXfORC2pF+CnIwVSEHgLdT2EKcttjc+gyEQk2dH8vR6IXYedS15rSSETRZ2HD8ZtDl4FI2Kcnpk7+KDP0IuwgLF+biexIdnI/BKLpzmW5NdbvTOQzGNcJz5sFz7dOupNG6k7Obp28+CjaRE7nlOYP97PjoOAfkJpCFxOJvyc1FquEf7J3/HJeGkRYIL0UMiToySI+/zL2OM0fs+9Wzrah8rX9hkjOq5pEoljXXxbhVAfwO57nNYQuW5HGc60KlmxYi5BDoK+c/qMhdNkWVsO2wurOQfdIDER+N8M7Kasi6P2fEUk2baVuybBekpmLnOhpa9BnizTRlb9WIquMzkezyPzdFa/RLrLg2UhtwceakxULkeSd36FZpBcepU/+rSLupP5LqWjLGizk0GX8e63Vsf6rshaR3jzbCq9Xs4gb99XAxL8qOycxdF2yCbeRpe8n8Xd/5CmrzMvLrrqcIJtuB76/pNervpOGM3aj6332w0hazOmAjagQF/zHsJmf0foQikFv/lO1kn84d1mqYbQeZfR61a/XAnbrdPR21n1WDs4pbbq2OLcDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPjX+Q8cl2UfM2pWzAAAAABJRU5ErkJggg=="
        else if (name === "SC제일은행")
            url = "data:image/png;base64,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"
        else if (name === "농협중앙회")
            url = "https://mblogthumb-phinf.pstatic.net/MjAxOTExMThfMTc2/MDAxNTc0MDY2ODkyNTM4.PSXWULCneGupG0qY5qd1a1xG_KSN4oeKewqyxt2wUd0g.61uE3lwEs6YrjwNz7xott5CCGnm4ioTQ_0cSrtYY16Eg.JPEG.jand0608/%EB%86%8D%ED%98%91%EB%A1%9C%EA%B3%A01.jpg?type=w800"
        else if (name === "KDB산업은행")
            url = "https://www.kdb.co.kr/wcmscontents/hmp/ch/bi/bi/rc/img_symbol_chbi.png"
        else if (name === "수협은행")
            url = "data:image/png;base64,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"
        else
            url = "https://lh3.googleusercontent.com/8PydoWI_sr5TI5zC2hl6H13-iRpad3wvX2zAEoEzzboOZBWkAd-YwmCiCCfzF3816A"
        return url
    }

    const getUserInfo = async () => {
        const httpRequest = {
            method: "GET",
            url: `${process.env.REACT_APP_PROXY}/user/me`,
            headers: {
                Authorization: localStorage.getItem("Authorization")
            }
        }
        const result = await axios(httpRequest)
        const accounts = result.data.res_list
        const newAccounts = accounts.map(async (each) => {
            return {...each, balance: await getAccountBalance(each.fintech_use_num)}
        })
        const a = await Promise.all(newAccounts
        )
        setUserInfo(a)
    }

    const getAccountBalance = async (fintechUseNum) => {
        const httpRequest = {
            method: "GET",
            url: `${process.env.REACT_APP_PROXY}/transaction/account?fintech_use_num=${fintechUseNum}`,
            headers: {
                Authorization: localStorage.getItem("Authorization")
            }
        }
        const result = await axios(httpRequest)
        return result.data.balance_amt
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

`

const Balance = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
`

const Image = styled.img`
  border-radius: 70%;
  width: 50px;
  height: 50px;
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

const DepositButton = styled.button`
  min-width: 50px;
  height: 35px;
  background-color: #424250;
  color: white;
  border-radius: 20%;
  border-color: transparent;
  margin-left: auto;
  margin-right: 20px;
`