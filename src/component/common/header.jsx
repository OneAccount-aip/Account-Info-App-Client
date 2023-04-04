import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import Welcome from "../account/welcome";
import {useEffect, useState} from "react";
import {userInfoApi} from "../../api/user";

const Header = () => {

    useEffect(() => {
        getUserInfo()
    }, [])

    const navigate = useNavigate()
    const notificationClickListener = () => {
        navigate("/notification")
    }
    const [user, setUser] = useState({name: ""})

    const getUserInfo = () => {
        userInfoApi(setUser);
    }
    return (
        <Div>
            <Welcome username={user.name}/>
            <Notification onClick={notificationClickListener}
                          src={"https://cdn-icons-png.flaticon.com/512/1827/1827301.png"}/>
        </Div>
    )
}
export default Header;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px;
`

const Notification = styled.img`
  height: 30px;
  margin-left: auto;
  margin-top: 10px;
  opacity: 70%;
`