import React from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';
import { getImage } from '../api';

interface PosterInput {
	url: string;
}
const Img = styled.Image`
	width: 100px;
	height: 160px;
	border-radius: 4px;
`;
const Poster = ({ url }: PosterInput) => {
	return <Img resizeMode="cover" source={{ uri: getImage(url) }}></Img>;
};

export default Poster;
