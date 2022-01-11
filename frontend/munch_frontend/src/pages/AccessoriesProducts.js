import Announcement from "../components/Announcement";
import FooterTest from "../components/FooterTest";
import Navbar from "../components/Navbar";
import Header from "../components/HeaderTest";


const AccessoriesProducts = () => {
    
    const content = {
        title: "Accessories",
        path: "< Accessories"
    }

    return (
        <div>
            <Announcement />
            <Navbar />
            <Header content={content}/>
            <FooterTest />
        </div>
    )
}

export default AccessoriesProducts;