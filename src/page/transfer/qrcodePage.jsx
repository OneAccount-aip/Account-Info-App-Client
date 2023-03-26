import {useLocation} from "react-router-dom";
import Header from "../../component/common/header";
import Footer from "../../component/common/footer";
import QRCodeSVG from "qrcode.react";
import styled from "styled-components";

const QrcodePage = () => {

    const {state} = useLocation();
    return (
        <div>
            <Header/>
            <Root>
                <DataText>QR</DataText>
                <QRBlock>
                    <QRCodeSVG size={250} value={state}/>
                    <p>{state}</p>
                </QRBlock>
            </Root>
            <Footer/>
        </div>
    )
}
export default QrcodePage

const QRBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`

const DataText = styled.p`
  margin: 8px;
  font-size: 1.3rem;
  font-weight: bold;
`

const Root = styled.div`
  background-color: #262450;
  margin: 15px;
  padding: 15px;
  border-radius: 20px;
`