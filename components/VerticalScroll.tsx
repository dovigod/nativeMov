import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { getImage } from '../api';
import Poster from './Poster';
import Votes from './Votes';
import { trimText } from '../utils';

const Container = styled.TouchableOpacity`
	margin-left: 30px;
`;

const Title = styled.Text`
	color: white;
`;

const VerticalScroll = ({ poster, title, votes }: any) => {
	return (
		<Container>
			<Poster url={poster} />
			<Title>{trimText(title, 13)}</Title>
			<Votes votes={votes} />
		</Container>
	);
};

export default VerticalScroll;
