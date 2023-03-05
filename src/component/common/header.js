import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    const logoClickListener=()=>{
        navigate("/")
    }

    const notificationClickListener=()=>{
        navigate("/mypage")
    }
    return (
        <Div>
            <LogoImg onClick={logoClickListener} src={"https://static.toss.im/logos/png/4x/logo-toss-mono-white.png"} alt={""}/>
            <Notification onClick={notificationClickListener} src={"https://cdn-icons-png.flaticon.com/512/1827/1827301.png"}/>
        </Div>
    )
}
export default Header;

const Div = styled.div`
  background-color: #101010;
`

const LogoImg = styled.img`
  width: 100px;
  margin-top: 50px;
  margin-left: 20px;
  margin-bottom: 10px;
  opacity: 30%;
`

const Notification = styled.img`
  height: 30px;
  float: right;
  margin-right: 20px;
  margin-top: 50px;
  margin-bottom: 10px;
  opacity: 70%;
`