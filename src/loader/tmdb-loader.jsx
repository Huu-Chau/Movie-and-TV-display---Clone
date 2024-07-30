import axios from 'axios'

export const fetchFromTMDB = async (url) => {
  // const baseUrl = process.env.REACT_APP_BASE_URL
  const baseUrl = "https://api.themovdb.org/3"
  // const access_token = process.env.REACT_APP_API_READ_ACCESS_TOKEN
  // const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzBiM2I1MTU1MTM1YzRkM2E0Y2RmZDdmMGM4ZTYxMCIsIm5iZiI6MTcyMTU3NzMyMS41Mzk5MzEsInN1YiI6IjY2OWQxY2ViNTRmNWM2YTU4MDc3OWE5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TnjszFmX4mM5xn612h66IJMGr4kOPE5iRzX0K40Cb10"
  // const options = {
  //   // method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGE4MWEzMWFmOTYxMWU0M2Y5ZDI0MzJkMzM0YmQ4MiIsIm5iZiI6MTcyMTkxODA4OC41MzQwMjYsInN1YiI6IjY2OWQxY2ViNTRmNWM2YTU4MDc3OWE5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QLzYxyPyGWHR0nQGQFCPyEwz0etEnScBFOBA1aFhNk4'
  //   }
  // };
  
  // fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));
    
  // const data = await fetch(`${baseUrl}/popular?language=en-US&page=1`, options)
    
  const getShow = async () => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=b0a81a31af9611e43f9d2432d334bd82')
      const response2 = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=b0a81a31af9611e43f9d2432d334bd82')
      console.log(response2.data.results)
      console.log(response.data.results)
    } catch (error) {
      console.error(error)
    }
  }
  return response.data
}