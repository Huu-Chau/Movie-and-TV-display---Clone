export const BannerLoader = async () => {
    // const baseUrl = process.env.REACT_APP_BASE_URL
    const baseUrl = "https://api.themovdb.org/3"
    // const api_key = process.env.REACT_APP_API_KEY
    const api_key = "7c0b3b5155135c4d3a4cdfd7f0c8e610"
    // const access_token = process.env.REACT_APP_API_READ_ACCESS_TOKEN
    const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzBiM2I1MTU1MTM1YzRkM2E0Y2RmZDdmMGM4ZTYxMCIsIm5iZiI6MTcyMTU3NzMyMS41Mzk5MzEsInN1YiI6IjY2OWQxY2ViNTRmNWM2YTU4MDc3OWE5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TnjszFmX4mM5xn612h66IJMGr4kOPE5iRzX0K40Cb10"
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${access_token}`
        }
      };
    
      const data = await fetch(`${baseUrl}/movie/now_playing?api_key=${api_key}&language=en-US&page-1`, options)
    
    if (!data.ok) {
        throw new Error("Fetching data failed")
    }

    return data.json()
}