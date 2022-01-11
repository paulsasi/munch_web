import { Container } from "./productList-styling";
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
            {renderProducts}
        </Container>
    )
}

export default ProductList;