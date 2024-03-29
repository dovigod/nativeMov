import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import FavPresenter from './FavPresenter';
import { movieApi } from '../../api';

const FavContainer = () => {
	const [movies, setMovies] = useState({
		results: [],
		error: null
	});

	const getData = async () => {
		const [results, error] = await movieApi.discover();
		setMovies({
			results,
			error
		});
	};

	useEffect(() => {
		getData();
	}, []);

	return <FavPresenter {...movies} />;
};

export default FavContainer;
