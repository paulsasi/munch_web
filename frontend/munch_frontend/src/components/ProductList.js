import { Container, ProductContainer, FilterContainer, Filter, FilterText, Select, Option} from "./productList-styling";
import {popularProducts} from "../data/popularProducts";
import Product from "./Product";

const ProductList = () => {

    const renderProducts = popularProducts.map((item) => {
        return (
            <Product item={item} key={item.id} />
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