import axios from "axios";

export default async function requestToExhibit(category: string, page: number, ordering?: string) {
    try {
        const response = await axios.get('https://api.rawg.io/api/'+category, {
        params: {
            ordering: ordering,
            page: page,
            page_size: 39,
            key: process.env.KEY!
        }
        })
        return response.data;
    } catch (error) {
        console.error(error);
    }
}