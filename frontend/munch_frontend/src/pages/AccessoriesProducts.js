import Announcement from "../components/Announcement";
import FooterTest from "../components/FooterTest";
import Navbar from "../components/Navbar";
import Header from "../components/HeaderTest";
import ProductList from "../components/ProductList";


const AccessoriesProducts = () => {
    
    const content = {
        title: "Accessories",
        path: "< Accessories"
    }

    const productFilter = {"type" : "accessory"};

    return (
        <div>
            <Announcement />
            <Navbar />
            <Header content={content}/>
            <ProductList args={productFilter}/>
            <FooterTest />
        </div>
    )
}

export default AccessoriesProducts;