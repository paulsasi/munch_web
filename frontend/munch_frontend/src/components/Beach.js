import Header from "./Header";
import './Beach.css';
import Inventory from './Inventory';

function Beach() {

    const args = {"type" : "beach"};
    return (
        <div>
            <Header />
            <div className='wrapper'>
                <div className='currentsite'> &lt; Playa </div>
                <h1 className='header'> Playa </h1>
                <div className='inventory-container'><Inventory args={args} /></div>
            </div>
            
        </div>
    );
}

export default Beach;

