import React from 'react';
import { View, Text, Button, Dimensions, StyleSheet } from 'react-native';
import styled from 'styled-components';
import Swiper from 'react-native-web-swiper';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
	section: {
		height: 100,
		backgroundColor: 'red'
	},
	header: {
		width: width,
		height: height / 3
	}
});

export default ({ navigation }: any) => {
	return (
		<View style={styles.header}>
			<Swiper>
				<View style={styles.section}>
					<Text>Favorites 1</Text>
				</View>
				<View style={styles.section}>
					<Text>Favorites 2</Text>
				</View>
				<View style={styles.section}>
					<Text>Favorites 3</Text>
				</View>
			</Swiper>
		</View>
	);
};
