import Header from "./Header";
import './Lingerie.css';
import Inventory from './Inventory';
import Footer from './Footer';

function Lingerie() {

    const args = {"type" : "lingerie"};

    return (
        <div>
            <Header />
            <div className='wrapper'>
                <div className='currentsite'> &lt; Lencería </div>
                <h1 className='header'> Lencería </h1>
                <div className='inventory-container'><Inventory args={args} /></div>
                <div className='lingerie-footer-container'>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default Lingerie;


