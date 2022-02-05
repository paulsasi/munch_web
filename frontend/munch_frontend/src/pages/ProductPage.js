import Announcement from "../components/Announcement";
import FooterTest from "../components/FooterTest";
import Navbar from "../components/Navbar";
import SingleProduct from "../components/SingleProduct";

const ProductPage = (args) => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <SingleProduct args={args}/>
            <FooterTest />
        </div>
    )
}

export default ProductPage;