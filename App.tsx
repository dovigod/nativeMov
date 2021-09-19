import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './navigation/Stack';

const cacheImages = (images: Array<string> | any) =>
	images.map((image: string) => {
		if (typeof image === 'string') {
			return Image.prefetch(image);
		} else {
			return Asset.fromModule(image).downloadAsync();
		}
	});

const cacheFonts = (fonts: any) => fonts.map((font: any) => Font.loadAsync(font));

export default function App() {
	const [isReady, setIsReady] = useState(false);
	const loadAssets = (): any => {
		const images = cacheImages([
			'https://images.unsplash.com/photo-1615387116460-b5ef38c83fbc?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
			require('./assets/splash.png')
		]);

		const fonts = cacheFonts([Ionicons.font]);
		console.log(images);

		return Promise.all([...images, ...fonts]);
	};
	const onFinish = () => {
		setIsReady(true);
	};
	return isReady ? (
		<NavigationContainer>
			<StackNav />
		</NavigationContainer>
	) : (
		<AppLoading startAsync={loadAssets} onFinish={onFinish} onError={(e) => console.log(e)} />
	);
}

/*
navigation;

*/
