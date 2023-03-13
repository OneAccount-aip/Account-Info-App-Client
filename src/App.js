import styled from "styled-components";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Signup from "./page/auth/signup";
import Signin from "./page/auth/signin";
import Transaction from "./page/trans/transaction";
import SendPage from "./page/main/sendPage";
import UserInfoPage from "./page/main/userInfoPage";
import Index from "./page/main";
import MyPage from "./page/main/myPage";
import AuthPage from "./page/user/authPage";
import DepositPage from "./page/trans/depositPage";
import InfoPage from "./page/main/infoPage";
import NotificationPage from "./page/user/notificationPage";

function App() {
    return (
        <BrowserRouter>
            <Div>
                <Routes>
                    <Route path="/" element={<Index/>}/>
                    <Route path="/signin" element={<Signin/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/trans" element={<Transaction/>}/>
                    <Route path="/send" element={<SendPage/>}/>
                    <Route path="/deposit" element={<DepositPage/>}/>
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
  background-color: #161619;
  min-height: 100vh;
  color: white;
  padding-bottom: 20px;
`
export default App;
