import axios from "axios";

export default async function getResults(props: {search: string}) {
    try {
        return await axios.get('https://api.rawg.io/api/games', {
            params: {
                page: 1,
                page_size: 39,
                search: props.search,
                key: "365861aa44ed48888609ad4668f3e3e2"
            }
        }).then(res => {
            return res.data.results;
        })
    } catch (error) {
        console.log(error);
    }
}