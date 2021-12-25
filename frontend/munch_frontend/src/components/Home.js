import { Link } from "react-router-dom";
import Header from "./Header";
import './Home.css';

function Home() {
    return (
        <div>
            <Header />
            <div className='wrapper'>
                <div className='currentsite'> &lt; Inicio </div>
                <h1 className='header'> Inicio </h1>
            </div>
        </div>
    );
}

export default Home;



