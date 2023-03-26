import Header from "../../component/common/header";
import Footer from "../../component/common/footer";
import styled from "styled-components";

const NotificationPage = () => {

    const notificationList = [
        {
            option:"입금",
            description:"A가 B에게"
        },{
            option:"출금",
            description:"A가 B에게"
        },{
            option:"출금",
            description:"A가 B에게"
        },{
            option:"입금",
            description:"A가 B에게"
        },
    ]
    return (
        <div>
            <Header/>
            <Text>알림</Text>
            <Root>
                <CleanButton>알림 지우기</CleanButton>
                {notificationList.map((l, index) => {
                    return (
                        <Card key={index}>
                            <Name>{l.option}</Name>
                            <Description>{l.description}</Description>
                        </Card>
                    )
                })}
            </Root>
            <Footer/>
        </div>
    )
}
export default NotificationPage;

const CleanButton = styled.button`
  margin-left: 80%;
  color: white;
  border-style: none;
  background-color: transparent;
`

const Text = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 20px;
`

const Root = styled.div`
  background-color: #262450;
  margin: 15px;
  padding: 15px;
  border-radius: 20px;
`

const Card = styled.div`
  border-bottom: 1px solid gray;
  display: flex;
  height: 50px;
  width: 100%;
  flex-direction: column;
  margin-top: 20px;
  padding-left: 20px;
`

const Name = styled.p`
  font-size: 1rem;
  color: white;
`

const Description = styled.p`
  font-size: 0.5rem;
  font-weight: bold;
  margin-left: 50px;
`