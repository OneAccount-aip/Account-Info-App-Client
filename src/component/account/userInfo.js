import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const UserInfo = ({info}) => {

    const navigate = useNavigate()
    info = [
        {
            "fintech_use_num": "120230013988951093616355",
            "account_alias": "pusan",
            "bank_code_std": "032",
            "bank_code_sub": "0000000",
            "bank_name": "부산은행",
            "account_num_masked": "394839248018***",
            "account_holder_name": "최성원",
            "account_holder_type": "P",
            "inquiry_agree_yn": "Y",
            "inquiry_agree_dtime": "20230302002918",
            "transfer_agree_yn": "Y",
            "transfer_agree_dtime": "20230302002918",
            "account_state": "01",
            "savings_bank_name": "",
            "account_seq": "",
            "account_type": 1
        },
        {
            "fintech_use_num": "120230013988951093616230",
            "account_alias": "sc",
            "bank_code_std": "023",
            "bank_code_sub": "0000000",
            "bank_name": "SC제일은행",
            "account_num_masked": "3734691384738***",
            "account_holder_name": "최성원",
            "account_holder_type": "P",
            "inquiry_agree_yn": "Y",
            "inquiry_agree_dtime": "20230302002156",
            "transfer_agree_yn": "Y",
            "transfer_agree_dtime": "20230302002156",
            "account_state": "01",
            "savings_bank_name": "",
            "account_seq": "",
            "account_type": 1
        },
        {
            "fintech_use_num": "120230013988951093616165",
            "account_alias": "농협",
            "bank_code_std": "012",
            "bank_code_sub": "0000000",
            "bank_name": "농협중앙회",
            "account_num_masked": "97198340812***",
            "account_holder_name": "최성원",
            "account_holder_type": "P",
            "inquiry_agree_yn": "Y",
            "inquiry_agree_dtime": "20230302001731",
            "transfer_agree_yn": "Y",
            "transfer_agree_dtime": "20230302001731",
            "account_state": "01",
            "savings_bank_name": "",
            "account_seq": "",
            "account_type": 1
        },
        {
            "fintech_use_num": "120230013988951093616084",
            "account_alias": "은행",
            "bank_code_std": "002",
            "bank_code_sub": "0000000",
            "bank_name": "KDB산업은행",
            "account_num_masked": "9237469374879***",
            "account_holder_name": "최성원",
            "account_holder_type": "P",
            "inquiry_agree_yn": "Y",
            "inquiry_agree_dtime": "20230302001053",
            "transfer_agree_yn": "Y",
            "transfer_agree_dtime": "20230302001053",
            "account_state": "01",
            "savings_bank_name": "",
            "account_seq": "",
            "account_type": 1
        },
        {
            "fintech_use_num": "120230013988951092411029",
            "account_alias": "이ㅓ로핀ㅇ",
            "bank_code_std": "004",
            "bank_code_sub": "0000000",
            "bank_name": "KB국민은행",
            "account_num_masked": "1938546901350***",
            "account_holder_name": "최성원",
            "account_holder_type": "P",
            "inquiry_agree_yn": "Y",
            "inquiry_agree_dtime": "20230222164954",
            "transfer_agree_yn": "Y",
            "transfer_agree_dtime": "20230222164954",
            "account_state": "01",
            "savings_bank_name": "",
            "account_seq": "",
            "account_type": 1
        }
    ]
    const setBankIcon = (name) => {
        let url = ""
        if (name === "KB국민은행")
            url = "https://apprecs.org/gp/images/app-icons/300/8b/com.kbstar.kbbank.jpg"
        else if (name === "부산은행")
            url = "data:image/png;base64,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"
        else if (name === "SC제일은행")
            url = "data:image/png;base64,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"
        else if (name === "농협중앙회")
            url = "https://mblogthumb-phinf.pstatic.net/MjAxOTExMThfMTc2/MDAxNTc0MDY2ODkyNTM4.PSXWULCneGupG0qY5qd1a1xG_KSN4oeKewqyxt2wUd0g.61uE3lwEs6YrjwNz7xott5CCGnm4ioTQ_0cSrtYY16Eg.JPEG.jand0608/%EB%86%8D%ED%98%91%EB%A1%9C%EA%B3%A01.jpg?type=w800"
        else if (name === "KDB산업은행")
            url = "https://www.kdb.co.kr/wcmscontents/hmp/ch/bi/bi/rc/img_symbol_chbi.png"
        else
            url = "https://lh3.googleusercontent.com/8PydoWI_sr5TI5zC2hl6H13-iRpad3wvX2zAEoEzzboOZBWkAd-YwmCiCCfzF3816A"
        return url
    }
    const accountClickListener = (account) => {
        navigate("/trans");
    }
    const depositClickListener = (account) => {
        navigate("/deposit")
    }

    return (
        <div>{info.map((i) => {
                return (
                    <CardBlock key={i.account_num_masked}>
                        <Image src={setBankIcon(i.bank_name)}/>
                        <Card onClick={(clk) => accountClickListener(i)}>
                            <AccountName>{i.bank_name}</AccountName>
                            <Balance>{"500,000,000원"}</Balance>
                        </Card>
                        <DepositButton onClick={(clk) => depositClickListener(i)}>송금</DepositButton>
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