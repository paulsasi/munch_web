import Navbar from "../components/Navbar"; 
import Announcement from '../components/Announcement';
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";
import FooterTest from "../components/FooterTest";

function Home() {
    return (
    <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Categories />
        <Newsletter />
        <FooterTest />
    </div>
    );
}

export default Home;
