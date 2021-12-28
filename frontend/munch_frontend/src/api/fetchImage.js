import config from "./config";

const fetchImage = async (img) => {
    try {
        const url = config.URL + config.IMAGE_ENDPOINT + img;
        const response = await fetch(url, {
            headers: {
                'Content-type': 'image/jpeg'
            }
        });

        if (!response.ok) {
            throw new Error(`An error has occured: ${response.status}$`);
        }

        const b64Image = await response.json();

        return 'data:image/png;base64,' + b64Image
    } catch (err) {
        console.log(err);
        const b64Image = []; /* Return empty image if any error occurred */

        return b64Image
    }
}

export default fetchImage;