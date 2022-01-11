import { Container, Path, Title} from "./headerTest-styling";

const Header = ({content}) => {
    return (
        <Container>
            <Path>{content.path}</Path>
            <Title>{content.title}</Title>
        </Container>
    )
}

export default Header;