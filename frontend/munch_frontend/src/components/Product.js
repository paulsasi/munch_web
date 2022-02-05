import { Container, ImgContainer, ImageLink, Image, InfoContainer, RowInfo, Title, TitleLink, Colors, ColorName} from "./product-styling";
import React, {useState, useEffect} from "react";
import fetchImage from "../api/fetchImage";
import {BsCircleFill} from 'react-icons/bs';


const Product = (args) => {

    const item = args.item;

    const id = item.reference;

    const [imageb64, setImageb64] = useState('');

    const [colorName, setColorName] = useState(' ');


    useEffect(() => {
        const getImage = async (img) => {
            const imgb64 = await fetchImage(img);
            setImageb64(imgb64);
        }

        const base_image = item.images[0];
        getImage(base_image);

    }, []);

    const renderColors = item.color.map((color) => {

        const name = (color !== undefined) ? color[0] : undefined;
        const r = (color !== undefined) ? color[1] : undefined;
        const g = (color !== undefined) ? color[2] : undefined;
        const b = (color !== undefined) ? color[3] : undefined;

        const icon_style = {
            color: 'rgb(' + r + ',' + g +',' + b + ')'
        };
        return <BsCircleFill style={icon_style} size={10}
                    onMouseEnter={() => {setColorName(name);}}
                    onMouseLeave={() => {setColorName(' ');}}>
                </BsCircleFill>
    });

    return (
        <Container>
            <ImgContainer>
                <ImageLink to={'/product/' + id}>
                    <Image src = {imageb64}/>
                </ImageLink>
            </ImgContainer>
            <InfoContainer>
                <RowInfo>

                    <TitleLink to={'/product/' + id}>{item.name}</TitleLink>

                    <Title>{item.price}€</Title>
                </RowInfo>
                <Colors>
                    {renderColors}
                </Colors>
                <RowInfo>
                    <ColorName>&nbsp;{colorName}</ColorName>
                </RowInfo>
            </InfoContainer>
        </Container>
    )
}

export default Product;