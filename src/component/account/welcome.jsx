import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Welcome = ({username}) => {
    const navigate = useNavigate()
    const logoClickListener = () => {
        navigate("/")
    }

    return (
        <Root onClick={logoClickListener}>
            <Username>Hi,</Username>
            <Username>{username}</Username>
            <HeaderText>Welcome back</HeaderText>
        </Root>
    )
}
export default Welcome


const Root = styled.div`
`

const Username = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
`

const HeaderText = styled.div`
  font-size: 0.8rem;
  margin-top: 10px;
  color: gray;
`