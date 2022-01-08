import { Container } from './categories-styling';
import {categories} from '../data/homeCategories';
import CategoryItem from './CategoryItem';


const Categories = () => {

    const renderCategories = categories.map((item) => {
        return (
            <CategoryItem item={item} key={item.id}/>
        )
    })
    return (
        <Container>
            {renderCategories}
        </Container>
    )
}

export default Categories;