import React from 'react';
import {} from 'react-native';
import styled from 'styled-components/native';

interface inputProps {
	placeHolder: string;
	value?: string;
	onChange?: any;
	onSubmit?: any;
}

const TextInput = styled.TextInput`
	background-color: white;
	margin-bottom: 50px;
`;

const Input = ({ placeHolder, value, onChange, onSubmit }: inputProps) => {
	return (
		<TextInput
			placeholder={placeHolder}
			returnKeyType="search"
			value={value}
			onChangeText={onChange}
			onSubmitEditing={onSubmit}
		></TextInput>
	);
};
//return key type == 키패드에 서치 버튼
export default Input;
