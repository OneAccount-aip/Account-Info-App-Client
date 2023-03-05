import styled from "styled-components";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Signup from "./page/auth/signup";
import Signin from "./page/auth/signin";
import Transaction from "./component/account/transaction";
import DepositPage from "./page/depositPage";
import UserInfoPage from "./page/userInfoPage";
import Index from "./page";
import MyPage from "./page/myPage";

function App() {
    return (
        <BrowserRouter>
            <Div>
                <Routes>
                    <Route path="/" element={<Index/>}/>
                    <Route path="/signin" element={<Signin/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/trans" element={<Transaction/>}/>
                    <Route path="/deposit" element={<DepositPage/>}/>
                    <Route path="/info" element={<UserInfoPage/>}/>
                    <Route path="/mypage" element={<MyPage/>}/>
                </Routes>
            </Div>
        </BrowserRouter>
    );
}

const Div = styled.div`
  background-color: #161619;
  min-height: 100vh;
  color: white;
`
export default App;
