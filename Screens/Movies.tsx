import React from 'react';
import { View, Text, Button } from 'react-native';

export default ({ navigation }: any) => {
	return (
		<View>
			<Text>Movies</Text>
			<Button
				onPress={() => {
					navigation.navigate('Search');
				}}
				title="someWhere!!"
			></Button>
		</View>
	);
};
