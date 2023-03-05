import styled from "styled-components";
import Header from "../common/header";
import {useNavigate} from "react-router-dom";

const Transaction = () => {
    const transactionList = {
        "api_tran_id": "fc9d78a6-31a1-4da4-a8bb-8692f4c0dab9",
        "rsp_code": "A0000",
        "rsp_message": "",
        "api_tran_dtm": "20230303170434858",
        "bank_tran_id": "M202300139U193502266",
        "bank_tran_date": "20190101",
        "bank_code_tran": "097",
        "bank_rsp_code": "000",
        "bank_rsp_message": "",
        "fintech_use_num": "120230013988951092411029",
        "balance_amt": 5000000,
        "page_record_cnt": 25,
        "next_page_yn": "Y",
        "befor_inquiry_trace_info": "",
        "bank_name": "KB국민은행",
        "savings_bank_name": "",
        "res_list": [
            {
                "tran_date": "20190101",
                "tran_time": "010101",
                "inout_type": "입금",
                "tran_type": "급여",
                "print_content": "오픈",
                "tran_amt": 1000000,
                "after_balance_amt": "5000000",
                "branch_name": "분당점"
            },
            {
                "tran_date": "20190101",
                "tran_time": "010101",
                "inout_type": "입금",
                "tran_type": "급여",
                "print_content": "오픈상여금",
                "tran_amt": 1000000,
                "after_balance_amt": "5000000",
                "branch_name": "분당점"
            },
            {
                "tran_date": "20190101",
                "tran_time": "010101",
                "inout_type": "입금",
                "tran_type": "급여",
                "print_content": "오픈상여금",
                "tran_amt": 1000000,
                "after_balance_amt": "5000000",
                "branch_name": "분당점"
            },
            {
                "tran_date": "20190101",
                "tran_time": "010101",
                "inout_type": "입금",
                "tran_type": "급여",
                "print_content": "오픈상여금",
                "tran_amt": 1000000,
                "after_balance_amt": "5000000",
                "branch_name": "분당점"
            },
            {
                "tran_date": "20190101",
                "tran_time": "010101",
                "inout_type": "입금",
                "tran_type": "급여",
                "print_content": "오픈상여금",
                "tran_amt": 1000000,
                "after_balance_amt": "5000000",
                "branch_name": "분당점"
            },
            {
                "tran_date": "20190101",
                "tran_time": "010101",
                "inout_type": "입금",
                "tran_type": "급여",
                "print_content": "오픈상여금",
                "tran_amt": 1000000,
                "after_balance_amt": "5000000",
                "branch_name": "분당점"
            },
            {
                "tran_date": "20190101",
                "tran_time": "010101",
                "inout_type": "입금",
                "tran_type": "급여",
                "print_content": "오픈상여금",
                "tran_amt": 1000000,
                "after_balance_amt": "5000000",
                "branch_name": "분당점"
            },
            {
                "tran_date": "20190101",
                "tran_time": "010101",
                "inout_type": "입금",
                "tran_type": "급여",
                "print_content": "오픈상여금",
                "tran_amt": 1000000,
                "after_balance_amt": "5000000",
                "branch_name": "분당점"
            },
            {
                "tran_date": "20190101",
                "tran_time": "010101",
                "inout_type": "입금",
                "tran_type": "급여",
                "print_content": "오픈상여금",
                "tran_amt": 1000000,
                "after_balance_amt": "5000000",
                "branch_name": "분당점"
            },
            {
                "tran_date": "20190101",
                "tran_time": "010101",
                "inout_type": "입금",
                "tran_type": "급여",
                "print_content": "오픈상여금",
                "tran_amt": 1000000,
                "after_balance_amt": "5000000",
                "branch_name": "분당점"
            },
            {
                "tran_date": "20190101",
                "tran_time": "010101",
                "inout_type": "입금",
                "tran_type": "급여",
                "print_content": "오픈상여금",
                "tran_amt": 1000000,
                "after_balance_amt": "5000000",
                "branch_name": "분당점"
            },
            {
                "tran_date": "20190101",
                "tran_time": "010101",
                "inout_type": "입금",
                "tran_type": "급여",
                "print_content": "오픈상여금",
                "tran_amt": 1000000,
                "after_balance_amt": "5000000",
                "branch_name": "분당점"
            },
            {
                "tran_date": "20190101",
                "tran_time": "010101",
                "inout_type": "입금",
                "tran_type": "급여",
                "print_content": "오픈상여금",
                "tran_amt": 1000000,
                "after_balance_amt": "5000000",
                "branch_name": "분당점"
            },
            {
                "tran_date": "20190101",
                "tran_time": "010101",
                "inout_type": "입금",
                "tran_type": "급여",
                "print_content": "오픈상여금",
                "tran_amt": 1000000,
                "after_balance_amt": "5000000",
                "branch_name": "분당점"
            },
            {
                "tran_date": "20190101",
                "tran_time": "010101",
                "inout_type": "입금",
                "tran_type": "급여",
                "print_content": "오픈상여금",
                "tran_amt": 1000000,
                "after_balance_amt": "5000000",
                "branch_name": "분당점"
            },
            {
                "tran_date": "20190101",
                "tran_time": "010101",
                "inout_type": "입금",
                "tran_type": "급여",
                "print_content": "오픈상여금",
                "tran_amt": 1000000,
                "after_balance_amt": "5000000",
                "branch_name": "분당점"
            },
            {
                "tran_date": "20190101",
                "tran_time": "010101",
                "inout_type": "입금",
                "tran_type": "급여",
                "print_content": "오픈상여금",
                "tran_amt": 1000000,
                "after_balance_amt": "5000000",
                "branch_name": "분당점"
            },
            {
                "tran_date": "20190101",
                "tran_time": "010101",
                "inout_type": "입금",
                "tran_type": "급여",
                "print_content": "오픈상여금",
                "tran_amt": 1000000,
                "after_balance_amt": "5000000",
                "branch_name": "분당점"
            },
            {
                "tran_date": "20190101",
                "tran_time": "010101",
                "inout_type": "입금",
                "tran_type": "급여",
                "print_content": "오픈상여금",
                "tran_amt": 1000000,
                "after_balance_amt": "5000000",
                "branch_name": "분당점"
            },
            {
                "tran_date": "20190101",
                "tran_time": "010101",
                "inout_type": "입금",
                "tran_type": "급여",
                "print_content": "오픈상여금",
                "tran_amt": 1000000,
                "after_balance_amt": "5000000",
                "branch_name": "분당점"
            },
            {
                "tran_date": "20190101",
                "tran_time": "010101",
                "inout_type": "입금",
                "tran_type": "급여",
                "print_content": "오픈상여금",
                "tran_amt": 1000000,
                "after_balance_amt": "5000000",
                "branch_name": "분당점"
            },
            {
                "tran_date": "20190101",
                "tran_time": "010101",
                "inout_type": "입금",
                "tran_type": "급여",
                "print_content": "오픈상여금",
                "tran_amt": 1000000,
                "after_balance_amt": "5000000",
                "branch_name": "분당점"
            },
            {
                "tran_date": "20190101",
                "tran_time": "010101",
                "inout_type": "입금",
                "tran_type": "급여",
                "print_content": "오픈상여금",
                "tran_amt": 1000000,
                "after_balance_amt": "5000000",
                "branch_name": "분당점"
            },
            {
                "tran_date": "20190101",
                "tran_time": "010101",
                "inout_type": "입금",
                "tran_type": "급여",
                "print_content": "오픈상여금",
                "tran_amt": 1000000,
                "after_balance_amt": "5000000",
                "branch_name": "분당점"
            },
            {
                "tran_date": "20190101",
                "tran_time": "010101",
                "inout_type": "입금",
                "tran_type": "급여",
                "print_content": "오픈상여금",
                "tran_amt": 1000000,
                "after_balance_amt": "5000000",
                "branch_name": "분당점"
            }
        ]
    }
    const date = (str) => {
        let month, day
        str[4] === '0' ? month = str.slice(5, 6) : month = str.slice(4, 6)
        str[6] === '0' ? day = str.slice(7, 8) : day = str.slice(6, 8)
        return month + "월 " + day + "일"
    }
    const navigate = useNavigate()

    const depositButtonListener=()=>{
        navigate("/deposit")
    }

    const time = (str) => {
        const time = str.slice(2, 4)
        const minute = str.slice(4, 6)
        return time + ":" + minute
    }
    return (
        <div>
            <Header/>
            <Root>
                <Account>토스뱅크 3987-92873-4071-034</Account>
                <Balance>500,000,000원</Balance>
                <DepositButton>채우기</DepositButton>
                <TransButton onClick={depositButtonListener}>보내기</TransButton>
            </Root>
            <Root>
                {transactionList.res_list.map((t, index) => {
                    return (
                        <div key={index}>
                            <Date>{date(t.tran_date)}</Date>
                            <CardBlock>
                                <Card>
                                    <Image
                                        src={"https://lh3.googleusercontent.com/8PydoWI_sr5TI5zC2hl6H13-iRpad3wvX2zAEoEzzboOZBWkAd-YwmCiCCfzF3816A"}/>
                                </Card>
                                <Card>
                                    <Description>{t.inout_type}</Description>
                                    <Time>{time(t.tran_time)}</Time>
                                </Card>
                                <BalanceCard>
                                    <Amount>+{t.tran_amt}원</Amount>
                                    <TotalBalance>{t.after_balance_amt}원</TotalBalance>
                                </BalanceCard>
                            </CardBlock>
                        </div>
                    )
                })}
            </Root>
        </div>
    )
}
export default Transaction;

const Date = styled.p`
  font-size: 0.8rem;
`

const DepositButton = styled.button`
  width: 150px;
  height: 40px;
  margin: 5px;
  background-color: #444452;
  border-style: none;
  color: dodgerblue;
  border-radius: 20%;
`

const TransButton = styled.button`
  width: 150px;
  height: 40px;
  margin: 5px;
  background-color: dodgerblue;
  border-style: none;
  color: white;
  border-radius: 20%;
`

const Root = styled.div`
  background-color: #232328;
  margin: 15px;
  padding: 15px;
  border-radius: 20px;
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

const BalanceCard = styled.div`
  margin-left: auto;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
`

const Image = styled.img`
  border-radius: 70%;
  width: 40px;
  height: 40px;
`

const Description = styled.p`
  font-weight: bold;
`

const Time = styled.p`
    font-size: 0.7rem;
  opacity: 70%;
`

const Balance = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`

const Account = styled.p`
  margin-top: 50px;
  margin-bottom: 10px;
  font-size: 0.3rem;
  text-decoration: underline;
`

const Amount = styled.p`
  font-size: 1.2rem;
  color: dodgerblue;
  font-weight: bold;
`

const TotalBalance = styled.p`
  font-size: 0.7rem;
  text-align: right;
`