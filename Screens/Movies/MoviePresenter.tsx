import React from 'react';
import { View, Text, Dimensions, ActivityIndicator, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';
import Slide from '../../components/Movies/Slide';
import Title from '../../components/Title';
import VerticalScroll from '../../components/VerticalScroll';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('screen');

const Container = styled.View``;

const SliderContainer = styled.View`
	width: ${WIDTH}px;
	height: ${HEIGHT / 4}px;
	margin-bottom: 50px;
`;

export default ({ loading, nowPlaying, popular }: any) => (
	<ScrollView
		style={{
			backgroundColor: 'black'
		}}
		contentContainerStyle={{
			justifyContent: loading ? 'center' : 'flex-start',
			flex: 1
		}}
	>
		{nowPlaying.length == 0 ? (
			<ActivityIndicator />
		) : (
			<>
				<SliderContainer>
					<Swiper controlsEnabled={false} loop timeout={3}>
						{nowPlaying?.map((movie: any) => {
							return (
								<Slide
									key={movie.id}
									id={movie.id}
									title={movie.original_title}
									overview={movie.overview}
									votes={movie.vote_average}
									backgroundImage={movie.backdrop_path}
									poster={movie.poster_path}
								/>
							);
						})}
					</Swiper>
				</SliderContainer>
				<Container>
					<Title title={'now playing!'}></Title>
					<ScrollView horizontal={true}>
						{popular.map((movie: any) => {
							return (
								<VerticalScroll
									key={movie.id}
									poster={movie.poster_path}
									title={movie.original_title}
									votes={movie.vote_average}
								/>
							);
						})}
					</ScrollView>
				</Container>
			</>
		)}
	</ScrollView>
);
