import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';

const cacheImages = (images: Array<string>) =>
	images.map((image: string) => {
		if (typeof image === 'string') {
			return Image.prefetch(image);
		} else {
			return Asset.fromModule(image).downloadAsync();
		}
	});

export default function App() {
	const [isReady, setIsReady] = useState(false);
	const loadAssets = async () => {
		const images = cacheImages([
			'https://images.unsplash.com/photo-1615387116460-b5ef38c83fbc?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
			require('./assets/splash.png')
		]);
		console.log(images);
	};
	const onFinish = () => {
		setIsReady(true);
	};
	return isReady ? (
		<Text>ready</Text>
	) : (
		<AppLoading startAsync={loadAssets} onFinish={onFinish} onError={(e) => console.log(e)} />
	);
}
