import {Container, Title, Description, InputContainer, Input, Button} from './newsletter-styling';
import {RiSendPlane2Fill} from 'react-icons/ri';

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from your favourite products.</Description>
            <InputContainer>
                <Input placeholder="Your email"/>
                <Button>
                    <RiSendPlane2Fill />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter;