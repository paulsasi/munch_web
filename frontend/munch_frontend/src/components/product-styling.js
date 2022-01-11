import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;

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

export const Image = styled.img`
    width: 90%;
    height: 100%;
    object-fit: cover;
    z-index: 2;

`;

export const InfoContainer = styled.div`
    flex: 1;
    background-color: blue;
    height: 100%;
    width: 81%;
`;

export const Title = styled.h3`
    margin: 0px 30px;;
`;