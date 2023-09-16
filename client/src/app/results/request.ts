import axios from "axios";

export default async function getResults(props: object) {
    try {
        const params = {
            page_size: 39,
            key: process.env.KEY!
        }
        Object.assign(params, props);

        return await axios.get('https://api.rawg.io/api/games', {
            params: params
        }).then(res => {
            return res.data;
        })
    } catch (error) {
        console.log(error);
    }
}