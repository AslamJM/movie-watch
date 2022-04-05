const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&lan=en-US`,
  },
  fetchToprated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  },
  fetchAction: {
    title: "Action",
    url: `/discover/movie?api_key=61dd2957c20f6dad45d70ee6df520d11&with_genres=28`,
  },
  fetchComedy: {
    title: "Comedy",
    url: `/discover/movie?api_key=61dd2957c20f6dad45d70ee6df520d11&with_genres=35`,
  },
  fetchRomance: {
    title: "Romance",
    url: `/discover/movie?api_key=61dd2957c20f6dad45d70ee6df520d11&with_genres=10749`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `/discover/movie?api_key=61dd2957c20f6dad45d70ee6df520d11&with_genres=9648`,
  },
  fetchThriller: {
    title: "Thriller",
    url: `/discover/movie?api_key=61dd2957c20f6dad45d70ee6df520d11&with_genres=53`,
  },
  fetchHorror: {
    title: "Horror",
    url: `/discover/movie?api_key=61dd2957c20f6dad45d70ee6df520d11&with_genres=27`,
  },
  fetchScienceFiction: {
    title: "Sci-Fi",
    url: `/discover/movie?api_key=61dd2957c20f6dad45d70ee6df520d11&with_genres=878`,
  },
};
