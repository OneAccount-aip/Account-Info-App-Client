import styled from "styled-components";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Signup from "./page/auth/signup";
import Signin from "./page/auth/signin";
import TransactionListPage from "./page/trans/transactionListPage";
import UserInfoPage from "./page/main/userInfoPage";
import Index from "./page/main";
import MyPage from "./page/main/myPage";
import AuthPage from "./page/user/authPage";
import TransferPage from "./page/trans/transferPage";
import InfoPage from "./page/main/infoPage";
import NotificationPage from "./page/user/notificationPage";
import PurchasePage from "./page/main/purchasePage";
import QrcodePage from "./page/transfer/qrcodePage";

function App() {
    return (
        <BrowserRouter>
            <Div>
                <Routes>
                    <Route path="/" element={<Index/>}/>
                    <Route path="/signin" element={<Signin/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/trans" element={<TransactionListPage/>}/>
                    <Route path="/trans/qr" element={<QrcodePage/>}/>
                    <Route path="/purchase" element={<PurchasePage/>}/>
                    <Route path="/deposit" element={<TransferPage/>}/>
                    <Route path="/accountInfo" element={<UserInfoPage/>}/>
                    <Route path="/authPage" element={<AuthPage/>}/>
                    <Route path="/mypage" element={<MyPage/>}/>
                    <Route path="/notification" element={<NotificationPage/>}/>
                    <Route path="/info" element={<InfoPage/>}/>
                </Routes>
            </Div>
        </BrowserRouter>
    );
}

const Div = styled.div`
  min-height: 100vh;
  color: white;
  padding-bottom: 20px;
`
export default App;
