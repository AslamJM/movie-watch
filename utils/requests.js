const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&lan=en-US`,
  },
  fetchToprated: {
    title: "Top Rated",
    url: `/trending/all/week?api_key=${API_KEY}&lan=en-US`,
  },
  fetchAction: {
    title: "Action",
    url: `/trending/all/week?api_key=${API_KEY}&lan=en-US`,
  },
  fetchComedy: {
    title: "Comedy",
    url: `/trending/all/week?api_key=${API_KEY}&lan=en-US`,
  },
  fetchRomance: {
    title: "Romance",
    url: `/trending/all/week?api_key=${API_KEY}&lan=en-US`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `/trending/all/week?api_key=${API_KEY}&lan=en-US`,
  },
  fetchThriller: {
    title: "Thriller",
    url: `/trending/all/week?api_key=${API_KEY}&lan=en-US`,
  },
  fetchHorror: {
    title: "Horror",
    url: `/trending/all/week?api_key=${API_KEY}&lan=en-US`,
  },
  fetchMisc: {
    title: "Mischellenous",
    url: `/trending/all/week?api_key=${API_KEY}&lan=en-US`,
  },
};
