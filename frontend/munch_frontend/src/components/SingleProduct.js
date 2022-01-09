import {Container, ImgContainer, Image, InfoContainer, Title, Description, Price, FilterContainer, Filter, FilterTitle, FilterColor, FilterSize, FilterSizeOption} from './singleProduct-styling';


const SingleProduct = () => {
    return (
        <Container>
            <ImgContainer>
                <Image src="https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y" />
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