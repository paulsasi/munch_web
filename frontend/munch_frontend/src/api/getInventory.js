import config from "./config";


const getInventory = async (args) => {

    try {

        const response = await fetch(config.URL + config.INVENTORY_ENDPOINT, {
            headers: {
                'Content-type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`An error has occured: ${response.status}$`);
        }

        const inventory = await response.json();

        return inventory

    } catch (err) {
        console.log(err);
        const inventory = []; /* Return empty inventory if any error occurred */

        return inventory
    }

}

export default getInventory;