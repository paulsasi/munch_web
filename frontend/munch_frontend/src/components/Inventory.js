import Header from "./Header";
import './Inventory.css';
import getInventory from "../api/getInventory";
import config from "../api/config";
import React, {useState, useEffect} from "react";


function Inventory(args) {

    const [inv, setInv] = useState([]);
    const updateInv = (value) => setInv(value);


    useEffect(() => {
        const fetchInventory = async () => {
            const inv = await getInventory();
            setInv(inv);
        }

        fetchInventory();
    }, [])


    console.log(inv);
    console.log('PHIIIN');
    console.log(inv[0]);
    console.log('rassssh');
    


    return (
        <div className='inventory-wrapper'>
            <div className='inventory-item-box' style={{gridColumn: '1 / 8', gridRow: '1 / 6'}}>haha</div>
            <div className='inventory-item-box' style={{gridColumn: '8 / 15', gridRow: '1 / 6'}}>hola</div>
            <div className='inventory-item-box' style={{gridColumn: '15 / 22', gridRow: '1 / 6'}}>hola</div>

            <div className='inventory-item-box' style={{gridColumn: '1 / 8', gridRow: '6/ 11'}}>hola</div>
            <div className='inventory-item-box' style={{gridColumn: '8 / 15', gridRow: '6 / 11'}}>hola</div>
            <div className='inventory-item-box' style={{gridColumn: '15 / 22', gridRow: '6 / 11'}}>hola</div>
        </div>
    );
}

export default Inventory;