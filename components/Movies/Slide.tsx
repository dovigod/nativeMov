import React from 'react';
import styled from 'styled-components/native';
import { Image, TouchableOpacity } from 'react-native';
import { getImage } from '../../api';
import Poster from '../../components/Poster';
import Votes from '../Votes';
import { trimText } from '../../utils';
interface slideInput {
	id: number;
	title: string;
	backgroundImage: string;
	votes: number;
	overview: string;
	poster: string;
}

const Container = styled.View`
	height: 100%;
	width: 100%;
	flex-direction: row;
`;

const BG = styled.Image`
	height: 100%;
	width: 100%;
	opacity: 0.7;
	position: absolute;
`;
const Content = styled.View`
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;
const Data = styled.View`
	width: 50%;
`;
const Titlem = styled.Text`
	color: rgb(220, 220, 220);
	font-weight: bold;
	font-size: 19px;
`;
const Overview = styled.Text`
	color: white;
	opacity: 0.7;
	font-size: 14px;
	font-weight: 500;
`;
const VotesContainer = styled.Text`
	margin-bottom: 7px;
`;

const Button = styled.View`
	background-color: #e74c3c;
	padding: 5px 10px;
	margin-top: 10px;
	border-radius: 3px;
`;
const ButtonText = styled.Text`
	color: #f4f4f4;
`;

const Slide = ({ id, title, backgroundImage, votes, overview, poster }: slideInput) => (
	<Container>
		<BG source={{ uri: getImage(backgroundImage) }} />
		<Content>
			<Poster url={poster} />
			<Data>
				<Titlem>{trimText(title, 40)}</Titlem>
				<VotesContainer>
					<Votes votes={votes} />
				</VotesContainer>
				<Overview>{trimText(overview, 30)}</Overview>
				<TouchableOpacity>
					<Button>
						<ButtonText>View Details</ButtonText>
					</Button>
				</TouchableOpacity>
			</Data>
		</Content>
	</Container>
);

export default Slide;
