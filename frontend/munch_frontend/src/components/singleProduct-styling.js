import styled from "styled-components";

export const Container = styled.div `
    padding: 50px;
    display: flex;
`;

export const ImgContainer = styled.div`
    flex: 1;

`;

export const Image = styled.img`
    width: 100%;
    height: 70vh;
    object-fit: cover;
`;

export const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

export const Title = styled.h1`
    font-weight: 200;
`;

export const Description = styled.p`
    margin: 20px 0px;
`;

export const Price = styled.span`
    font-weight: 100;
    font-size: 20px;
`;

export const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`;

export const Filter = styled.div`
    display: flex;
    align-items: center;
`;

export const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

export const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 3px;
    cursor: pointer;
`;

export const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

export const FilterSizeOption = styled.option`

`;