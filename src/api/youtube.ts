import axios from 'axios'

const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY

async function search(searchTerm: string): Promise<Array<object>> {
  try {
    const response = await axios.get('search', {
      baseURL: 'https://www.googleapis.com/youtube/v3/',
      params: {
        part: 'snippet',
        maxResults: 5,
        key: apiKey,
        q: searchTerm,
      },
    })
    return response.data.items
  } catch (error) {
    console.log(error)
    throw error
  }
}

export default { search }
