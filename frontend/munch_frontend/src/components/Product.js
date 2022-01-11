import { Container, ImgContainer, Image, InfoContainer, Title} from "./product-styling";


const Product = ({item}) => {
    return (
        <Container>
            <ImgContainer>
                <Image src = {require(`../${item.img}`)}/>
            </ImgContainer>
            <InfoContainer>
                <Title>Camiseta</Title>
                <Title>hola</Title>
                <Title>Colors</Title>
            </InfoContainer>
        </Container>
    )
}

export default Product;