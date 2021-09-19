//thing on top of each other
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Detail from '../Screens/Detail';
import Tabs from './Tabs';

const stack = createStackNavigator();

const StackNav = () => (
	<stack.Navigator
		screenOptions={{
			presentation: 'modal',
			headerBackTitleVisible: false // 뒤로갈 페이지 있을때 이름 x
		}}
	>
		<stack.Screen name="Tabs" component={Tabs}></stack.Screen>
		<stack.Screen name="Detail" component={Detail} options={{}}></stack.Screen>
	</stack.Navigator>
);

export default StackNav;

/*
navigator -> gives prop 
screen has access to prop 'navigation'
 
*/
