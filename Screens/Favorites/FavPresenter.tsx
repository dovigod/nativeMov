import React, { useState } from 'react';
import { Dimensions, GestureResponderEvent, PanResponder, PanResponderGestureState, Animated } from 'react-native';

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

const styles = {
	top: 80,
	height: HEIGHT / 1.5,
	width: '90%',
	position: 'absolute'
};
const FavPresenter = ({ results }: any) => {
	const [topIndex, setTopIndex] = useState(0);

	const nextCard = () => setTopIndex((cur) => cur + 1);

	const position = new Animated.ValueXY();
	const panResponse = PanResponder.create({
		onStartShouldSetPanResponder: () => true,
		onPanResponderMove: (evt: GestureResponderEvent, { dx, dy }: PanResponderGestureState) => {
			position.setValue({ x: dx, y: dy });
		},
		onPanResponderRelease: (evt, { dx, dy }) => {
			if (dx >= 250) {
				console.log(topIndex);
				Animated.spring(position, {
					toValue: {
						x: WIDTH + 100,
						y: dy
					},
					useNativeDriver: true
				}).start(nextCard);
			} else if (dx <= -250) {
				Animated.spring(position, {
					toValue: {
						x: -WIDTH - 100,
						y: dy
					},
					useNativeDriver: true
				}).start(nextCard);
			} else {
				Animated.spring(position, {
					toValue: {
						x: 0,
						y: 0
					},
					useNativeDriver: true
					// bounciness: 10,
					// friction: 1
				}).start(); // slowly goes to arg
			}
		}
	});
	const rotationValues = position.x.interpolate({
		inputRange: [-200, 0, 200],
		outputRange: ['-10deg', '0deg', '10deg'],
		extrapolate: 'clamp'
	});
	const secondCardOpacity = position.x.interpolate({
		inputRange: [-255, 0, 255],
		outputRange: [1, 0.2, 1],
		extrapolate: 'clamp'
	});
	const secondCardScale = position.x.interpolate({
		inputRange: [-255, 0, 255],
		outputRange: [1, 0.8, 1],
		extrapolate: 'clamp'
	});
	return (
		<Container>
			{results.map((result: any, index: number) => {
				if (index < topIndex) {
					return null;
				}
				if (index === topIndex) {
					console.log(topIndex, result.title);
					return (
						<Animated.View
							style={{
								width: '90%',
								height: HEIGHT / 1.5,
								position: 'absolute',
								top: 80,
								transform: [{ rotate: rotationValues }, ...position.getTranslateTransform()],
								zIndex: results.length * 2 - index
							}}
							key={result.id}
							{...panResponse.panHandlers}
						>
							<Poster source={{ uri: getImage(result.poster_path) }} />
						</Animated.View>
					);
				} else if (index === topIndex + 1) {
					return (
						<Animated.View
							style={{
								width: '90%',
								height: HEIGHT / 1.5,
								position: 'absolute',
								top: 80,
								zIndex: results.length * 2 - index,
								opacity: secondCardOpacity,
								transform: [
									{
										scale: secondCardScale
									}
								]
							}}
							key={result.id}
							{...panResponse.panHandlers}
						>
							<Poster source={{ uri: getImage(result.poster_path) }} />
						</Animated.View>
					);
				}

				return (
					<Animated.View
						style={{
							width: '90%',
							height: HEIGHT / 1.5,
							position: 'absolute',
							top: 80,
							zIndex: results.length * 2 - index,
							opacity: 0
						}}
						key={result.id}
						{...panResponse.panHandlers}
					>
						<Poster source={{ uri: getImage(result.poster_path) }} />
					</Animated.View>
				);
			})}
		</Container>
	);
};

export default FavPresenter;
