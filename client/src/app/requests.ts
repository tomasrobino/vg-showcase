import axios, { AxiosResponse } from "axios";


export async function getTopRated() {
  try {
    const top = await axios.get('https://api.rawg.io/api/games', {
      params: {
        ordering: "-metacritic",
        page: 1,
        page_size: 10,
        exclude_additions: true,
        key: "365861aa44ed48888609ad4668f3e3e2"
      }
    })
    const topImgs = [];
    for (let i = 0; i < 10; i++) {
      topImgs.push(await axios.get(`https://api.rawg.io/api/games/${top.data.results[i].slug}/screenshots`, {
        params: {
          page: 1,
          page_size: 5,
          key: "365861aa44ed48888609ad4668f3e3e2"
        }
      }));
    }
    return topImgs;
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
    return response;
  } catch (error) {
    console.error(error);
  }
}