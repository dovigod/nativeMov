import React from 'react';
import { Dimensions, GestureResponderEvent, PanResponder, PanResponderGestureState, Animated } from 'react-native';
// import Animated from 'react-native-reanimated';
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
	const position = new Animated.ValueXY();
	const panResponse = PanResponder.create({
		onStartShouldSetPanResponder: () => true,
		onPanResponderMove: (evt: GestureResponderEvent, { dx, dy }: PanResponderGestureState) => {
			position.setValue({ x: dx, y: dy });
		}
	});
	return (
		<Container>
			{results.reverse().map((result: any) => (
				<Animated.View
					style={{
						width: '90%',
						height: HEIGHT / 1.5,
						position: 'absolute',
						top: 80,
						transform: [...position.getTranslateTransform()]
					}}
					key={result.id}
					{...panResponse.panHandlers}
				>
					<Poster source={{ uri: getImage(result.poster_path) }} />
				</Animated.View>
			))}
		</Container>
	);
};

export default FavPresenter;
