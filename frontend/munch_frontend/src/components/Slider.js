import styled from 'styled-components';
import {IoMdArrowDropright, IoMdArrowDropleft} from 'react-icons/io';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};

`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    height: 70%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 50px;
`;

const Description = styled.p`
    margin: 50px 0px;
    font-size: 12px;
    font-weigth: 500;
    letter-spacing: 3px;
`;

const Button = styled.button`
    paggind: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;

`;

const Slider = () => {
    return (
        <Container>
            <Arrow direction='left'>
                <IoMdArrowDropleft />
            </Arrow>
            <Wrapper>
                <Slide bg="f5fafd">
                    <ImgContainer>
                        <Image src='https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y' />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Description> DON'T COMPROMISE ON STYLE! GET PLAAT 30% OFF FOR NEW ARRIVALS.</Description>
                        <Button> SHOP NOW</Button>
                    </InfoContainer>
                </Slide>

                <Slide bg="fcf1ed">
                    <ImgContainer>
                        <Image src='https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y' />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Description> DON'T COMPROMISE ON STYLE! GET PLAAT 30% OFF FOR NEW ARRIVALS.</Description>
                        <Button> SHOP NOW</Button>
                    </InfoContainer>
                </Slide>

                <Slide bg="fbf0f4">
                    <ImgContainer>
                        <Image src='https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y' />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Description> DON'T COMPROMISE ON STYLE! GET PLAAT 30% OFF FOR NEW ARRIVALS.</Description>
                        <Button> SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction='right'>
                <IoMdArrowDropright />
            </Arrow>
        </Container>
    )
}

export default Slider;