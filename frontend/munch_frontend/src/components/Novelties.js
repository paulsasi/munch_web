import Header from "./Header";
import './Novelties.css';
import Inventory from './Inventory';
import Footer from './Footer';

function Novelties() {

    const args = {};

    return (
        <div>
            <Header />
            <div className='novelties-wrapper'>
                <div className='novelties-currentsite'> &lt; Novedades </div>
                <h1 className='novelties-header'> Novedades </h1>
                <div className='inventory-container'>
                    <Inventory args={args} />
                </div>
                <div className='novelties-footer-container'>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default Novelties;
