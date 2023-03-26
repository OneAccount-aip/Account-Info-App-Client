import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import Welcome from "../account/welcome";
import axios from "axios";
import {useEffect, useState} from "react";

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
        const httpRequest = {
            method: "GET",
            url: `${process.env.REACT_APP_PROXY}/user`,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("Authorization")}`
            }
        }
        axios(httpRequest)
            .then((res) => {
                setUser(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
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