//thing on top of each other
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Detail from '../Screens/Detail';

const stack = createStackNavigator();

const StackNav = () => (
	<stack.Navigator>
		<stack.Screen name="Home" component={Home}></stack.Screen>
		<stack.Screen name="Detail" component={Detail}></stack.Screen>
	</stack.Navigator>
);

export default StackNav;

/*
navigator -> gives prop 
screen has access to prop 'navigation'
 
*/
