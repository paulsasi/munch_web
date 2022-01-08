import {Container, Image, Info, Title, Button} from './categoryItem-styling';

const CategoryItem = ({item}) => {

    console.log(item.img);
    return (
        <Container>
            <Image src={require(`../${item.img}`)}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem;