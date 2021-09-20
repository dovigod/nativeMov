import React from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';
import Poster from './Poster';
import Votes from './Votes';
import { getImage } from '../api';
import { trimText } from '../utils';

const Container = styled.View`
	padding: 0px 30px;
	margin-bottom: 30px;
	flex-direction: row;
	margin-top: 20px;
	align-items: flex-start;
`;

const Data = styled.View`
	margin-left: 10px;
	width: 60%;
`;
const Title = styled.Text`
	color: white;
	font-weight: 500;
`;
const Overview = styled.Text`
	color: grey;
`;

const Horizontal = ({ id, title, votes, poster, overview }: any) => {
	return (
		<TouchableOpacity>
			<Container>
				<Poster url={getImage(poster)}></Poster>
				<Data>
					<Title>{title}</Title>
					<Votes votes={votes} />
					<Overview>{trimText(overview, 180)}</Overview>
				</Data>
			</Container>
		</TouchableOpacity>
	);
};

export default Horizontal;
