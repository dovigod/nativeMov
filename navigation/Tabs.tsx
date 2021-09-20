import React, { useEffect, useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from '../Screens/Movies';

import Tv from '../Screens/Tv';
import Search from '../Screens/Search';
import Favorites from '../Screens/Favorites';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
const Tabs = createBottomTabNavigator();

export default (props: any) => {
	// useEffect(() => {
	// 	navigation.setOptions({
	// 		// /
	// 	});
	// });
	const { navigation, route } = props;
	useLayoutEffect(() => {
		//fires after graphic change
		console.log(getFocusedRouteNameFromRoute(route) || 'Movies');
		const name = getFocusedRouteNameFromRoute(route) || 'da';
		props.navigation.setOptions({
			title: name,
			// headerShown: name === 'Search' ? false : true,
			headerStyle: {
				backgroundColor: 'black',
				borderBottomColor: 'black',
				shadowColor: 'black'
			},
			headerTintColor: 'white'
		});
	}, [navigation, route]);

	return (
		<Tabs.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarStyle: {
					backgroundColor: 'black',
					borderTopColor: 'black'
				},
				tabBarIcon: ({ focused }) => {
					let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';
					if (route.name === 'Movies') {
						iconName += 'film' as any;
					} else if (route.name === 'Tvs') {
						iconName += 'tv' as any;
					} else if (route.name === 'Search') {
						iconName += 'search' as any;
					} else if (route.name === 'Favorites') {
						iconName += 'heart' as any;
					}

					return <Ionicons name={iconName as any} color={focused ? 'white' : 'grey'} size={26}></Ionicons>;
				}
			})}
		>
			<Tabs.Screen name="Movies" component={Movies}></Tabs.Screen>
			<Tabs.Screen component={Tv} name="Tvs"></Tabs.Screen>
			<Tabs.Screen component={Search} name="Search"></Tabs.Screen>
			<Tabs.Screen component={Favorites} name="Favorites"></Tabs.Screen>
		</Tabs.Navigator>
	);
};

///getFocusedRouteNameFromRoute
