import axios, { AxiosResponse } from "axios";


export async function getTopRated() {
  try {
    const response = await axios.get('https://api.rawg.io/api/games', {
      params: {
        ordering: "-metacritic",
        page: 1,
        page_size: 10,
        exclude_additions: true,
        key: "365861aa44ed48888609ad4668f3e3e2"
      }
    })
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getNewest() {
  try {
    const response = await axios.get('https://api.rawg.io/api/games', {
      params: {
        ordering: "-released",
        page: 1,
        page_size: 10,
        exclude_additions: true,
        key: "365861aa44ed48888609ad4668f3e3e2"
      }
    })
    //console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}