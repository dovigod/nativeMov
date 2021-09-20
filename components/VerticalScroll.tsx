import React from 'react';
import styled from 'styled-components/native';
import { getImage } from '../api';
import Poster from './Poster';
import Votes from './Votes';

const Container = styled.View`
	margin-left: 30px;
`;

const Title = styled.Text`
	color: white;
`;

const VerticalScroll = ({ poster, title, votes }: any) => {
	return (
		<Container>
			<Poster url={getImage(poster)} />
			<Title>{title.length > 13 ? title.slice(0, 13) + '...' : title}</Title>
			<Votes votes={votes} />
		</Container>
	);
};

export default VerticalScroll;
