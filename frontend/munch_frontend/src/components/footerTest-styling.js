import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    background-color: #393737;
`;

export const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0px 25px;;
`;

export const Center = styled.div`
    flex: 1;
    padding: 10px 20px;

`;

export const Right = styled.div`
    flex: 1;
    padding: 10px 20px;
`;

export const Logo = styled.h1`
    flex: 1;
    color: white;
    font-size: 25px;
`;

export const Description = styled.div`
    flex: 1;
    margin: 20px 0px;
    color: white;
`;

export const Title = styled.h2`
    margin-bottom: 30px;
    color: white;
    font-size: 16px;
`;

export const List = styled.ul`
    margin: 0;
    padding 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    color: white;
    font-size: 12px;
`;

export const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

export const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    color: white;
    font-size: 12px;
`;


export const ItemLink = styled(Link)`
    color: white;
    text-decoration: none;
`;