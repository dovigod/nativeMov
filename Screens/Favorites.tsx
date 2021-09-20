import React, { useEffect, useState } from 'react';
import { View, Text, Button, Dimensions, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';
import { movieApi } from '../api';

const { width, height } = Dimensions.get('screen');

const Header = styled.View`
	height: ${height / 3}px;
`;

const Section = styled.View`
	height: 100%;
	background-color: red;
`;

export default () => {
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

	return (
		<Header>
			<Swiper controlsEnabled={false} loop timeout={3}>
				<Section>
					<Text>Favorites 1</Text>
				</Section>
				<Section>
					<Text>Favorites 2</Text>
				</Section>
				<Section>
					<Text>Favorites 3</Text>
				</Section>
			</Swiper>
		</Header>
	);
};
