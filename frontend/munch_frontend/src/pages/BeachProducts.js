import Announcement from "../components/Announcement";
import FooterTest from "../components/FooterTest";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import Header from "../components/HeaderTest";


const BeachProducts = () => {

    const content = {
        title: "Beach",
        path: "< Beach"
    }

    const productFilter = {"type" : "Beach"};

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

export default BeachProducts;