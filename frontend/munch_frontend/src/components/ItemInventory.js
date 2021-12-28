import fetchImage from "../api/fetchImage";
import Header from "./Header";
import React, {useState, useEffect} from "react";

function ItemInventory(props) {

    const item = props.item;

    console.log(item.images[0]);

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
        <div>
            <img src={imageb64}></img>
            
        </div>
    );
}

export default ItemInventory;

