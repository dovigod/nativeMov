import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { movieApi } from '../api';

export default () => {
	const [movies, setMovies] = useState({
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
	return (
		<View
			style={{
				backgroundColor: 'black',
				flex: 1
			}}
		>
			<Text style={{ color: 'white' }}>{movies.nowPlaying?.length}</Text>
		</View>
	);
};

/*


*/
