import styled from "styled-components";
import Slider from "react-slick";
import ModalCard from "./modalCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ModalWithDraw = ({finNum, accountList}) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <ModalWithdrawBlock>
            <Slider {...settings}>
                {accountList.map((account, index) => {
                    return (
                        <ModalCard key={index}
                                   fromFinNum={account.fintech_use_num}
                                   balance={account.balance}
                                   bankName={account.bank_name}
                                   toFinNum={finNum}/>
                    )
                })}
            </Slider>
        </ModalWithdrawBlock>
    )
}
export default ModalWithDraw

const ModalWithdrawBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 20px;
  border: 1px #dfdfdf solid;
`;