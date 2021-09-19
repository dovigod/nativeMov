import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from '../Screens/Movies';
import Tv from '../Screens/Tv';
import Search from '../Screens/Search';
import Favorites from '../Screens/Favorites';
const Tabs = createBottomTabNavigator();

export default () => (
	<Tabs.Navigator>
		<Tabs.Screen component={Movies} name="Movies"></Tabs.Screen>
		<Tabs.Screen component={Tv} name="Tv"></Tabs.Screen>
		<Tabs.Screen component={Search} name="Search"></Tabs.Screen>
		<Tabs.Screen component={Favorites} name="Favorites"></Tabs.Screen>
	</Tabs.Navigator>
);
