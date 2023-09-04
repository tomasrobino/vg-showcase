import axios from "axios";

export default async function getDetails(props: {game: string}) {
    try {
        return await axios.get('https://api.rawg.io/api/games/'+props.game, {
            params: {
                id: props.game,
                key: process.env.KEY!
            }
        }).then(res => {
            return res.data;
        })
    } catch (error) {
        console.log(error);
    }
}