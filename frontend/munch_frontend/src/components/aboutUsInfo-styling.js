import styled from "styled-components";

export const DescriptionContainer = styled.div`
    display: flex;
`;

export const TimetableContainer = styled.div`
    display: flex;
`;

export const ContactContainer = styled.div`
    display: flex;
`;

export const MapContainer = styled.div`
    margin: 5px 3px;
`;

export const ImgContainer = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
`;

export const InfoContainer = styled.div`
    flex: 1;
    margin: 3px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`

`;

export const Description = styled.p`

`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding 0;
    font-size: 16px;
    font-weight: 600;
`;

export const ListItem = styled.li`
    margin-bottom: 7px;
`;

export const Map = styled.iframe`
    width: 100%;
    height: 100%;
    border-style: none;
`;