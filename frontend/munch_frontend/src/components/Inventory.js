import Header from "./Header";
import './Inventory.css';
import getInventory from "../api/getInventory";


function Inventory(args) {

    const data = getInventory();
    console.log('PHIIIN');

    return (
        <div>
            <h1>hola</h1>
        </div>
    );
}

export default Inventory;