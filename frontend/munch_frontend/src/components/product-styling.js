import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    -webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;

    &:hover {
        -webkit-transform: scale(1.03);
	    transform: scale(1.03);
    }
`;

export const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ImageLink = styled(Link)`
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 2;

`;

export const InfoContainer = styled.div`
    flex: 1;
    height: 100%;
    width: 100%;
`;

export const RowInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.h3`
    margin: 0px 5px;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 2px;
`;
export const TitleLink = styled(Link)`
    color: black;
    text-decoration: none;
    margin: 0px 5px;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 2px;
    `;

export const Colors = styled.div`
    margin-left: 5px;
    display: flex;
`;

export const ColorName = styled.p`
    font-size: 10px;
    margin: 0px 5px;
`;