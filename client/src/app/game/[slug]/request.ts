import axios from "axios";

export default async function getDetails(props: {game: string}) {
    try {
        return await axios.get('https://api.rawg.io/api/games/'+props.game, {
            params: {
                id: props.game,
                key: "365861aa44ed48888609ad4668f3e3e2"
            }
        }).then(res => {
            return res.data;
        })
    } catch (error) {
        console.log(error);
    }
}