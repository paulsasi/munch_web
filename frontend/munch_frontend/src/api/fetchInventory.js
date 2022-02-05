import config from "./config";


const fetchInventory = async (props) => {

    try {

        const args = props.args;

        /* Construct the URL */
        var query = '?';
        for (var key in args) {
            query += key + '=' + args[key] +'&'
        }
        const url = config.URL + config.INVENTORY_ENDPOINT + query;

        /* Fetch data */
        const response = await fetch(url, {
            headers: {
                'Content-type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`An error has occured: ${response.status}$`);
        }

        const inventory = await response.json();

        const formatted_inventory = inventory.map((item) => {
            const formatted_item = {};
            formatted_item.name = item.name;
            formatted_item.reference = item.reference;
            formatted_item.brand = item.brand;
            formatted_item.type = item.type;
            formatted_item.subtype = item.subtype;
            formatted_item.color = JSON.parse(item.color).color;
            formatted_item.size = JSON.parse(item.size).size;
            formatted_item.price = item.price;
            formatted_item.material = JSON.parse(item.material).material;
            formatted_item.form = item.form;
            formatted_item.release_date = item.release_date;
            formatted_item.images = JSON.parse(item.images).images;
            return formatted_item;
        });

        return formatted_inventory

    } catch (err) {
        console.log(err);
        const inventory = []; /* Return empty inventory if any error occurred */

        return inventory
    }

}

export default fetchInventory;