import {Container, Image, Info, Title, ButtonLink, Button} from './categoryItem-styling';

const CategoryItem = ({item}) => {

    console.log(item.img);
    return (
        <Container>
            <Image src={require(`../${item.img}`)}/>
            <Info>
                <Title>{item.title}</Title>
                <ButtonLink to={item.path}>
                    <Button>SHOP NOW</Button>
                </ButtonLink>
            </Info>
        </Container>
    )
}

export default CategoryItem;