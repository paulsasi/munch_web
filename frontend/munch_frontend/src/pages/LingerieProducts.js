import Announcement from "../components/Announcement";
import FooterTest from "../components/FooterTest";
import Navbar from "../components/Navbar";
import Header from "../components/HeaderTest";
import ProductList from "../components/ProductList";


const LingerieProducts = () => {

    const content = {
        title: "Lingerie",
        path: "< Lingerie"
    }

    return (
        <div>
            <Announcement />
            <Navbar />
            <Header content={content}/>
            <ProductList />
            <FooterTest />
        </div>
    )
}

export default LingerieProducts;