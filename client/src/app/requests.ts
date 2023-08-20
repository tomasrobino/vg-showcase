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
    }).then(async (res) => {
      const gameArr = [];
      for (let i = 0; i < 10; i++) {
        gameArr.push(await axios.get(`https://api.rawg.io/api/games/${res.data.results[i].slug}/screenshots`, {
          params: {
            page: 1,
            page_size: 5,
            key: "365861aa44ed48888609ad4668f3e3e2"
          }
        }));
      }
      return gameArr;
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
    return response;
  } catch (error) {
    console.error(error);
  }
}