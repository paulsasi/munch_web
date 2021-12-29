import fetchImage from "../api/fetchImage";
import './ItemInventory.css';
import {BsCircleFill} from 'react-icons/bs';
import Header from "./Header";
import React, {useState, useEffect} from "react";

function ItemInventory(props) {

    const item = props.item;

    const [imageb64, setImageb64] = useState('');

    useEffect(() => {
        const getImage = async (img) => {
            const imgb64 = await fetchImage(img);
            setImageb64(imgb64);
        }

        const base_image = item.images[0];
        getImage(base_image);

    }, [])

    var h = 20;

    const f = () => {
        console.log('aaaaa');
        h = 10;
    }

    return (
        <div className='item-box-wrapper'>
            <div className='image-container'>
                <img className='item-image'src={imageb64}></img>
            </div>
            <div className='image-name'>{item.name}</div>
            <div className='image-price'>{item.price}€</div>
            <BsCircleFill className='image-colors' color={'red'} onMouseEnter={f}> </BsCircleFill>{h}
        </div>
    );
}

export default ItemInventory;