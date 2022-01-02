import fetchImage from "../api/fetchImage";
import './ItemInventory.css';
import {BsCircleFill} from 'react-icons/bs';
import Header from "./Header";
import React, {useState, useEffect} from "react";

function ItemInventory(props) {

    const item = props.item;


    const [imageb64, setImageb64] = useState('');

    const [colorDisplay, setColorDisplay] = useState({display: 'none'});
    const invColorDisplay = () => setColorDisplay({display: 'none'});
    const blockColorDisplay = () => setColorDisplay({display: 'block'});

    const [colorName, setColorName] = useState(' ');


    useEffect(() => {
        const getImage = async (img) => {
            const imgb64 = await fetchImage(img);
            setImageb64(imgb64);
        }

        const base_image = item.images[0];
        getImage(base_image);

    }, [])

    const renderColors = item.color.map((color) => {
        const name = (color != undefined) ? color[0] : undefined;
        const r = (color != undefined) ? color[1] : undefined;
        const g = (color != undefined) ? color[2] : undefined;
        const b = (color != undefined) ? color[3] : undefined;

        const icon_style = {
            color: 'rgb(' + r + ',' + g +',' + b + ')'
        };

        return (
            <BsCircleFill className='image-color-circles' style={icon_style}
            onMouseEnter={() => {blockColorDisplay(); setColorName(name);}} onMouseLeave={() => {invColorDisplay(); setColorName(' ');}} />
        )
    })

    return (
        <div className='item-box-wrapper'>
            <div className='image-container'>
                <img className='item-image'src={imageb64}></img>
            </div>
            <div className='image-name'>{item.name}</div>
            <div className='image-price'>{item.price}€</div>

            <div className='image-color-container'>
                {renderColors}
                <div className='image-color-name'>{colorName}</div>
            </div>

        </div>
    );
}

export default ItemInventory;