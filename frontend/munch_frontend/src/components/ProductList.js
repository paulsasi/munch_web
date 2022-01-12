import React, {useState, useEffect} from "react";
import { Container, ProductContainer, FilterContainer, Filter, FilterText, Select, Option} from "./productList-styling";
import {popularProducts} from "../data/popularProducts";
import Product from "./Product";

import fetchInventory from "../api/fetchInventory";

const ProductList = (args) => {

    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        const getInventory = async (args) => {
            const inv = await fetchInventory(args);

            setInventory(inv);
        }

        getInventory(args);

    }, []);

    const renderProducts = inventory.map((item) => {
        return (
            <Product item={item}/>
        )
    });

    return (
        <Container>
            <FilterContainer>
                <Filter>
                    <FilterText>Filtros:</FilterText>
                    <Select>
                        <Option disabled selected>
                            Color
                        </Option>
                        <Option> White</Option>
                        <Option> Black</Option>
                        <Option> Red</Option>
                        <Option> Blue</Option>
                        <Option> Yellow</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Size
                        </Option>
                        <Option> XS</Option>
                        <Option> S</Option>
                        <Option> M</Option>
                        <Option> L</Option>
                        <Option> XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Ordenar productos:</FilterText>
                    <Select>
                        <Option> Newest</Option>
                        <Option> Price (asc)</Option>
                        <Option> Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer> 
            <ProductContainer>
                {renderProducts}
            </ProductContainer>
        </Container>
    )
}

export default ProductList;