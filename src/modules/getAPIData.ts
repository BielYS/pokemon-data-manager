import axios from 'axios';

export async function getAPIData(url: string, limit: number = 150) {
  try {
    let offset = 0;
    const allData = [];
    while (allData.length < limit) {
      const response = await axios.get(`${url}?limit=20&offset=${offset}`);
      allData.push(...response.data.results);
      offset += 20;
    }
    return allData.slice(0, limit);
  } catch (error) {
    console.error('Error fetching data: ', error);
    throw error;
  }
}
