import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, NativeModule } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';

const cacheImages = (images: Array<string> | any) =>
	images.map((image: string) => {
		if (typeof image === 'string') {
			return Image.prefetch(image);
		} else {
			return Asset.fromModule(image).downloadAsync();
		}
	});

const cacheFonts = (fonts: any) => fonts.map((font: any) => (font) => Font.loadAsync(font));

export default function App() {
	const [isReady, setIsReady] = useState(false);
	const loadAssets = (): any => {
		const images = cacheImages([
			'https://images.unsplash.com/photo-1615387116460-b5ef38c83fbc?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
			require('./assets/splash.png')
		]);

		const fonts = cacheFonts([Ionicons.font]);
		console.log(images);
		//Because the Promise.all will wait for it :)
		return Promise.all([...images, ...fonts]);
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

/*
Image.prefetch() => 이미지 미리 로딩
asset <- asset sys에 접근 가능하게
Apploading => preloading
prop{
  startAsync =? promise return func
}
*/
