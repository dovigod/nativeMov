import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { tvApi } from '../api';

export default () => {
	const [shows, setShows] = useState({
		today: [],
		todayError: null,
		thisWeek: [],
		thisWeekError: null,
		topRated: [],
		topRatedError: null,
		popular: [],
		popularError: null
	});
	const getData = async () => {
		const [today, todayError] = await tvApi.today();
		const [thisWeek, thisWeekError] = await tvApi.today();
		const [topRated, topRatedError] = await tvApi.today();
		const [popular, popularError] = await tvApi.today();
		setShows({
			today,
			todayError,
			thisWeek,
			thisWeekError,
			topRated,
			topRatedError,
			popular,
			popularError
		});
	};
	useEffect(() => {
		getData();
	}, []);
	return (
		<View>
			<Text>{shows.today?.length}</Text>
		</View>
	);
};
