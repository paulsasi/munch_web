import {Container, Left, Center, Right, Logo, Description, Title, List, ListItem, ContactItem, ItemLink} from './footerTest-styling';
import {HiLocationMarker} from 'react-icons/hi';
import {AiFillPhone, AiFillMail} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const FooterTest = () => {
    return (
        <Container>
            <Left>
                <Logo>MÜNCH</Logo>
                <Description>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book
                </Description>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>
                        <ItemLink to="/about-us">Contacto</ItemLink>
                    </ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><HiLocationMarker style={{marginRight: "10px"}}/>Calle San Martín 36</ContactItem>
                <ContactItem><AiFillPhone style={{marginRight: "10px"}}/>943 345 654 676</ContactItem>
                <ContactItem><AiFillMail style={{marginRight: "10px"}}/>munch@gmail.com</ContactItem>

            </Right>
        </Container>
    )
}

export default FooterTest;