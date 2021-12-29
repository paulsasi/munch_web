import Header from "./Header";
import './Beach.css';
import Inventory from './Inventory';
import Footer from './Footer';

function Beach() {

    const args = {"type" : "beach"};

    return (
        <div>
            <Header />
            <div className='wrapper'>
                <div className='currentsite'> &lt; Playa </div>
                <h1 className='header'> Playa </h1>
                <div className='inventory-container'><Inventory args={args} /></div>
                <div className='beach-footer-container'>
                    <Footer/>
                </div>
            </div>

            

            
        </div>
    );
}

export default Beach;

