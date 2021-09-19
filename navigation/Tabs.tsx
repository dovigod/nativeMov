import React, { useEffect, useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from '../Screens/Movies';
import Tv from '../Screens/Tv';
import Search from '../Screens/Search';
import Favorites from '../Screens/Favorites';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
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
		console.log('routeChange');

		console.log(getFocusedRouteNameFromRoute(route) || 'Movies');
		props.navigation.setOptions({
			title: 'Movies'
		});
	});
	console.log(props);

	return (
		<Tabs.Navigator>
			<Tabs.Screen name="Movies" component={Movies}></Tabs.Screen>
			<Tabs.Screen component={Tv} name="Tvs"></Tabs.Screen>
			<Tabs.Screen component={Search} name="Search"></Tabs.Screen>
			<Tabs.Screen component={Favorites} name="Favorites"></Tabs.Screen>
		</Tabs.Navigator>
	);
};

///getFocusedRouteNameFromRoute
