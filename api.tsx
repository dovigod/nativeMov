import axios from 'axios';

const API_KEY = '10a105c94c7e42a666b6f1af8bcbcd7b';

const makeRequest = (path: string, params?: any) => {
	return axios.get(`https://api.themoviedb.org/3${path}`, {
		params: {
			...params,
			api_key: API_KEY
		}
	});
};

export const movieApi = {
	nowPlaying: (): any => makeRequest('/movie/now_playing'),
	popular: () => makeRequest('/movie/popular'),
	upcoming: () => makeRequest('/movie/upcoming', { region: 'kr' }),
	search: (query: any) => makeRequest('/search/movie', { query }),
	movie: (id: any) => makeRequest(`/movie/${id}`),
	discover: () => makeRequest('/discover/movie')
};

export const tvApi = {
	today: () => makeRequest('/tv/airing_today'),
	thisWeek: () => makeRequest('/tv/on_the_air'),
	toprated: () => makeRequest('/tv/top_rated'),
	popular: () => makeRequest('/tv/popular'),
	search: (query: any) => makeRequest('/search/tv', { query }),
	show: (id: any) => makeRequest(`/tv/${id}`)
};
