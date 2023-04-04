import Footer from "../../component/common/footer";
import Header from "../../component/common/header";
import {QrReader} from "react-qr-reader";
import Modal from "react-modal";
import {useEffect, useState} from "react";
import styled from "styled-components";
import ModalWithDraw from "../transfer/modalWithDraw";
import {accountBalanceApi, userAccountApi} from "../../api/account";

const PurchasePage = () => {

    useEffect(() => {
        getUserInfo()
        // eslint-disable-next-line
    }, [])
    const [data, setData] = useState("No result");
    const [modal, setOpenModal] = useState(false); //no camera : true
    const closeModal = () => {
        setOpenModal(false);
    };

    const openModal = () => {
        setOpenModal(true);
    };

    const [userInfoAccount, setUserInfo] = useState([]);

    const getUserInfo = async () => {
        const newAccounts = await userAccountApi(getAccountBalance);
        const a = await Promise.all(newAccounts
        )
        setUserInfo(a)
    }
    const getAccountBalance = async (fintechUseNum) => {
        return await accountBalanceApi(fintechUseNum);
    }

    const CustomStyles = {
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: "9",
        },
        content: {
            width: "95%",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            zIndex: "99999",
        },
    };
    return (
        <div>
            <Header/>
            <Root>
                <PurchaseText>결제</PurchaseText>
                <QrReader
                    onResult={(result, error) => {
                        if (!!result) {
                            setData(result?.text);
                            openModal()
                        }
                        if (!!error) {
                            console.info(error);
                        }
                    }}
                    style={{width: "100%"}}
                />
                <Data>{data}</Data>
                <Modal
                    isOpen={modal}
                    style={CustomStyles}
                    onRequestClose={closeModal}
                >
                    <ModalWithDraw finNum={data} accountList={userInfoAccount}></ModalWithDraw>
                </Modal>
            </Root>
            <Footer/>
        </div>
    )
}
export default PurchasePage

const Data = styled.div`
  margin: 40px;
`

const PurchaseText = styled.p`
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