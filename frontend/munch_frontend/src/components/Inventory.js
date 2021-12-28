import Header from "./Header";
import './Inventory.css';
import getInventory from "../api/getInventory";
import config from "../api/config";
import React, {useState, useEffect} from "react";


function Inventory(args) {

    const [inv, setInv] = useState([]);
    const updateInv = (value) => setInv(value);

    const ITEMS_PER_LINE = 3;


    useEffect(() => {
        const fetchInventory = async () => {
            const inv = await getInventory();
            setInv(inv);
        }

        fetchInventory();
    }, [])

    const renderInventory = inv.map((item, index) => {

        const row = Math.floor(index / ITEMS_PER_LINE);
        const col = index % ITEMS_PER_LINE;

        /* const col = `${2 * 10}`; */
        const formatted_row = `${1 + 6*row} / ${6 + 6*row}`;
        const formatted_col = `${1 + 7*col} / ${8 + 7*col}`;

        console.log({formatted_row});
        console.log({formatted_col});
        console.log('########################');
        return (
            <div className='inventory-item-box' style={{gridColumn: formatted_col, gridRow: formatted_row}}> {item.name} </div>
        )
    })
    return (
        <div className='inventory-wrapper'>
            {renderInventory}
        </div>
    );
}

export default Inventory;