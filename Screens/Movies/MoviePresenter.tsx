import React from 'react';
import { View, Text, Dimensions, ActivityIndicator, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';
import Slide from '../../components/Movies/Slide';
import Title from '../../components/Title';
import VerticalScroll from '../../components/VerticalScroll';
import Horizontal from '../../components/Horizontal';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('screen');

const Container = styled.View``;

const SliderContainer = styled.View`
	width: 100%;
	height: ${HEIGHT / 4}px;
	margin-bottom: 50px;
`;

export default ({ loading, nowPlaying, popular, upcoming }: any) => (
	<ScrollView
		style={{
			backgroundColor: '#D2303D'
		}}
		contentContainerStyle={{
			justifyContent: loading ? 'center' : 'flex-start'
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
					<ScrollView
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						contentContainerStyle={{
							paddingLeft: 30
						}}
						style={{
							marginTop: 20,
							marginBottom: 10
						}}
					>
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
					<Title title={'Coming Soon'}></Title>
					{upcoming.map((movie: any) => {
						return (
							<Horizontal
								key={movie.id}
								id={movie.id}
								title={movie.original_title}
								votes={movie.vote_average}
								poster={movie.poster_path}
								overview={movie.overview}
							/>
						);
					})}
				</Container>
			</>
		)}
	</ScrollView>
);
