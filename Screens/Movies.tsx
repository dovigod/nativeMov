import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';

export default ({ navigation }: any) => {
	return (
		<View>
			<Text>Movies</Text>
			<Button
				onPress={() => {
					navigation.navigate('Detail');
				}}
				title="someWhe!!"
			></Button>
		</View>
	);
};
