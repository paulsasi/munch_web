import fetchImage from "../api/fetchImage";
import './ItemInventory.css';
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

    return (
        <div className='item-box-wrapper'>
            <div className='image-container'>
                <img className='item-image'src={imageb64}></img>
            </div>
            <div className='image-info'>hola</div>
        </div>
    );
}

export default ItemInventory;

