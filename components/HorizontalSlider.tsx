import React from 'react';
import Title from './Title';
import { ScrollView } from 'react-native';

interface hsProps {
	title: any;
	children: any;
	results?: any;
}

const HorizontalSlider = ({ title, children, results }: hsProps) => {
	return (
		<>
			<Title title={title} />
			<ScrollView
				style={{ marginTop: 20, marginBottom: 40 }}
				horizontal
				contentContainerStyle={{ paddingLeft: 30 }}
				showsHorizontalScrollIndicator={false}
			>
				{children}
			</ScrollView>
		</>
	);
};

export default HorizontalSlider;
