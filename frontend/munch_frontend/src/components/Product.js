import { Container, ImgContainer, Image, InfoContainer, Title} from "./product-styling";
import React, {useState, useEffect} from "react";
import fetchImage from "../api/fetchImage";


const Product = (args) => {

    const item = args.item;

    const [imageb64, setImageb64] = useState('');

    useEffect(() => {
        const getImage = async (img) => {
            const imgb64 = await fetchImage(img);
            setImageb64(imgb64);
        }

        const base_image = item.images[0];
        getImage(base_image);

    }, []);

    return (
        <Container>
            <ImgContainer>
                <Image src = {imageb64}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{item.name}</Title>
                <Title>{item.price}</Title>
                <Title>{item.subtype}</Title>
            </InfoContainer>
        </Container>
    )
}

export default Product;