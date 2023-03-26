import Footer from "../../component/common/footer";
import Header from "../../component/common/header";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const InfoPage = () => {

    const navigate = useNavigate()
    const infoList = [
        {
            name: "내정보",
            description: "로그인한 유저의 정보 보기",
        }, {
            name: "결제",
            description: "등록된 계좌로부터 결제",
        }, {
            name: "내 자산",
            description: "내 자산 모아모기",
        }, {
            name: "내 지출",
            description: "내 지출 모아보기",
        }, {
            name: "내 수입",
            description: "내 수입모아보기",
        }, {
            name: "앱 설정",
            description: "앱 설정 보기",
        }
    ];
    const infoClickListener = (e) => {
        switch (e) {
            case 0:
                navigate("/mypage")
                break
            case 1:
                navigate("/purchase")
                break
            case 2:
                navigate("/accountInfo")
                break
            case 3:
                navigate("/accountInfo")
                break
            case 4:
                navigate("/accountInfo")
                break
            case 5:
                navigate("/accountInfo")
                break
            default:
        }
    }
    return (
        <div>
            <Header/>
            <Root>
                {infoList.map((l, index) => {
                    return (
                        <Card key={index} onClick={() => infoClickListener(index)}>
                            <Name>{l.name}</Name>
                            <Description>{l.description}</Description>
                        </Card>
                    )
                })}
            </Root>
            <Footer/>
        </div>
    )
}
export default InfoPage;

const Root = styled.div`
  background-color: #262450;
  margin: 15px;
  padding: 15px;
  border-radius: 20px;
`

const Card = styled.div`
  display: flex;
  height: 70px;
  width: 150px;
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
  float: right;
`