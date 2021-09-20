import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { movieApi } from '../../api';
import MoviePresenter from './MoviePresenter';

export default () => {
	const [movies, setMovies] = useState({
		loading: true,
		nowPlaying: [],
		nowPlayingError: null,
		popular: [],
		popularError: null,
		upcoming: [],
		upcomingError: null
	});

	const getData = async () => {
		const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
		const [popular, popularError] = await movieApi.popular();
		const [upcoming, upcomingError] = await movieApi.popular();
		setMovies({
			loading: false,
			nowPlaying,
			popular,
			upcoming,
			nowPlayingError,
			popularError,
			upcomingError
		});
	};
	useEffect(() => {
		getData();
	}, []);
	return <MoviePresenter {...movies} />;
};

/*


*/
