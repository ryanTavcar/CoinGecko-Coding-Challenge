import axios from 'axios';

export const listCoins = async(url) => {
    try {
        const {data} = await axios.get(url);
        return data;
    } catch(error) {
        const message =
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        return message;
    }

}