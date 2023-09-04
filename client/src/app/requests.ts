import axios from "axios";


export async function getTopRated() {
  try {
    return await axios.get('https://api.rawg.io/api/games', {
      params: {
        ordering: "-metacritic",
        page: 1,
        page_size: 15,
        exclude_additions: true,
        key: process.env.KEY!
      }
    }).then(res => {
      const aux = structuredClone(res.data.results);
      for (let i = 0; i < aux.length; i++) {
        if (aux[i].short_screenshots.length === 0) {
          aux.splice(i, 1);
        }
        if (i > 9) {
          aux.splice(10);
        }
      }
      
      return aux;
    })
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
        key: process.env.KEY!
      }
    })
    return response;
  } catch (error) {
    console.error(error);
  }
}