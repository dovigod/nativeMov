import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { getImage } from '../../api';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const Container = styled.View`
	padding-top: 50px;
	flex: 1;
	background-color: black;
	align-items: center;
`;

const Card = styled.View`
	top: 80px;
	height: ${HEIGHT / 1.5}px;
	position: absolute;
	width: 90%;
`;

const Text = styled.Text`
	color: red;
`;

const Poster = styled.Image`
	border-radius: 20px;
	width: 100%;
	height: 100%;
`;
const FavPresenter = ({ results }: any) => {
	return (
		<Container>
			{results.reverse().map((result: any) => (
				<Card key={result.id}>
					<Poster source={{ uri: getImage(result.poster_path) }} />
				</Card>
			))}
		</Container>
	);
};

export default FavPresenter;
