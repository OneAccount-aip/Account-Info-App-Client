import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate()
    const homeClickListener = () => {
        navigate("/accountInfo")
    }
    const sendClickListener = () => {
        const depositData = {
            bank_name: "",
            account_num_masked: ""
        }
        navigate("/purchase", {state:depositData})
    }
    const myPageClickListener = () => {
        navigate("/mypage")
    }
    const infoClickListener = () => {
        navigate("/info")
    }
    return (
        <Div>
            <ButtonBlock onClick = {homeClickListener}>
                <Img src={"https://cdn-icons-png.flaticon.com/512/69/69524.png"}/>
                <NavButton>홈</NavButton>
            </ButtonBlock>
            <ButtonBlock onClick = {sendClickListener}>
                <Img src={"https://e7.pngegg.com/pngimages/785/698/png-clipart-computer-icons-graphics-remittance-money-parkinson-text-trademark.png"}/>
                <NavButton>결제</NavButton>
            </ButtonBlock>
            <ButtonBlock onClick = {myPageClickListener}>
                <Img src={"https://e7.pngegg.com/pngimages/952/451/png-clipart-poland-computer-icons-curt-manufacturing-llc-information-boso-ale-w-ostrogach-my-account-icon-miscellaneous-company-thumbnail.png"}/>
                <NavButton>내정보</NavButton>
            </ButtonBlock>
            <ButtonBlock onClick = {infoClickListener}>
                <Img src={"https://cdn-icons-png.flaticon.com/512/61/61438.png"}/>
                <NavButton>전체</NavButton>
            </ButtonBlock>
        </Div>
    )
}

const Div = styled.div`
  border-top: 0.1px solid gray;
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  height: 70px;
  width: 100%;
  background-color: #19173D;
`
const ButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`
const Img = styled.img`
  width: 20px;
  margin : auto;
  filter: invert(80);
`
const NavButton = styled.button`
  color: white;
  border-style: none;
  background-color: #19173D;
  margin-bottom: 15px;
`
export default Footer;