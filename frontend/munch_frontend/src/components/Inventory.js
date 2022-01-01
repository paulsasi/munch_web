import Header from "./Header";
import './Inventory.css';
import ItemInventory from "./ItemInventory";
import fetchInventory from "../api/fetchInventory";
import fetchImage from "../api/fetchImage";
import config from "../api/config";
import React, {useState, useEffect} from "react";


function Inventory(args) {

    const [inventory, setInventory] = useState([]);

    const ITEMS_PER_LINE = 3;

    useEffect(() => {
        const getInventory = async (args) => {
            const inv = await fetchInventory(args);

            setInventory(inv);
        }

        getInventory(args);

    }, [])


    const renderInventory = inventory.map((item, index) => {

        const row = Math.floor(index / ITEMS_PER_LINE);
        const formatted_row = `${1 + 5*row} / ${6 + 5*row}`;

        const col = index % ITEMS_PER_LINE;
        const formatted_col = `${1 + 7*col} / ${8 + 7*col}`;
        
        return (
            <div className='inventory-item-box' style={{gridColumn: formatted_col, gridRow: formatted_row}}>
                <ItemInventory item={item}/>
            </div>
        )
    })
    return (
        <div className='inventory-wrapper'>
            {renderInventory}
        </div>
    );
}

export default Inventory;