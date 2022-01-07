import {Container, Arrow, Wrapper, Slide, ImgContainer, Image, InfoContainer, Title, Description, Button} from './slider-styling';
import {IoMdArrowDropright, IoMdArrowDropleft} from 'react-icons/io';
import { useState } from 'react';
import { sliderItems } from '../data/sliderItems';

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const slideTotal = sliderItems.length;

    const handleClick = (direction) => {
        if (direction==='left'){
            setSlideIndex(((slideIndex - 1)+ slideTotal) % slideTotal);
        }
        else if (direction==='right'){
            setSlideIndex(((slideIndex + 1)+ slideTotal) % slideTotal);
        }
    };

    const renderSlides = sliderItems.map((item) => {

        return (
            <Slide bg={item.bg}>
                <ImgContainer>
                    <Image src={require(`../${item.img}`)} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.description}</Description>
                    <Button> SHOP NOW</Button>
                </InfoContainer>
            </Slide>
        )
    })

    return (
        <Container>
            <Arrow direction='left' onClick={() => handleClick("left")}>
                <IoMdArrowDropleft />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {renderSlides}
            </Wrapper>
            <Arrow direction='right' onClick={() => handleClick("right")}>
                <IoMdArrowDropright />
            </Arrow>
        </Container>
    )
}

export default Slider;