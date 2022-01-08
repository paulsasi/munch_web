import Navbar from "../components/Navbar"; 
import Announcement from '../components/Announcement';
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";

function HomeTest() {
    return (

    <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Categories />
        <Newsletter />
    </div>
    );
}

export default HomeTest;
