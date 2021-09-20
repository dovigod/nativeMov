import React from 'react';
import {} from 'react-native';
import styled from 'styled-components/native';

const Text = styled.Text`
	color: white;
	font-weight: bold;
	font-size: 16px;
	margin-left: 30px;
	z-index: 3;
`;
const Title = ({ title }: any) => {
	return <Text>{title}</Text>;
};

export default Title;
