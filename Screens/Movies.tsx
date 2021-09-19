import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { movieApi } from '../api';

export default ({ navigation }: any) => {
	const [nowPlaying, setNowPlaying] = useState({
		movies: [],
		error: null
	});

	const getData = async () => {
		const {
			data: { results }
		} = await movieApi.nowPlaying();
		console.log(results);
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
			<Text>Movies</Text>
		</View>
	);
};

/*


*/
