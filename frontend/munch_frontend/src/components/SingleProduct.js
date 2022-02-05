import {Container, ImgContainer, Image, InfoContainer, Title, Description, Price, FilterContainer, Filter, FilterTitle, FilterColor, FilterSize, FilterSizeOption} from './singleProduct-styling';
import { useParams } from 'react-router-dom';

const SingleProduct = (args) => {

    const { id } = useParams();

    console.log('LOOOOL');
    console.log(id);
    return (
        <Container>
            <ImgContainer>
                <Image src={require("../static/images/image2.png")} />
            </ImgContainer>
            <InfoContainer>
                <Title>HOLA</Title>
                <Description> HOLAAA</Description>
                <Price> 20$</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
            </InfoContainer>
            
        </Container>
    )
}

export default SingleProduct;