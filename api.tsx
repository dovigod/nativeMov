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
const getAnything = async (path: any, params: any = {}) => {
	try {
		const {
			data: { results }
		} = await makeRequest(path, params);
		return [results, null];
	} catch (e) {
		return [null, e];
	}
};
export const movieApi = {
	nowPlaying: (): any => getAnything('/movie/now_playing'),
	popular: () => getAnything('/movie/popular'),
	upcoming: () => getAnything('/movie/upcoming', { region: 'kr' }),
	search: (query: any) => getAnything('/search/movie', { query }),
	movie: (id: any) => getAnything(`/movie/${id}`),
	discover: () => getAnything('/discover/movie')
};

export const tvApi = {
	today: () => getAnything('/tv/airing_today'),
	thisWeek: () => getAnything('/tv/on_the_air'),
	toprated: () => getAnything('/tv/top_rated'),
	popular: () => getAnything('/tv/popular'),
	search: (query: any) => getAnything('/search/tv', { query }),
	show: (id: any) => getAnything(`/tv/${id}`)
};
