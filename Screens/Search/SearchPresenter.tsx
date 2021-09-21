import React from 'react';
import styled from 'styled-components/native';
import Horizontal from '../../components/Horizontal';
import Input from '../../components/Search/Input';
import HorizontalSlider from '../../components/HorizontalSlider';
import VerticalScroll from '../../components/VerticalScroll';
interface searchPresenterProps {
	results: any;
	onChange: any;
	onSubmit: any;
	keyword: string;
}

const Container = styled.ScrollView`
	flex-direction: column;
	background-color: black;
`;

const Text = styled.Text``;

export default ({ movies, onChange, onSubmit, keyword }: any) => {
	return (
		<Container>
			<Input placeHolder={'Write something'} value={keyword} onChange={onChange} onSubmit={onSubmit} />
			<HorizontalSlider title={'Movie Results'}>
				{movies.length !== 0 &&
					movies.map((movie: any) => {
						return (
							<VerticalScroll
								key={movie.id}
								title={movie.title}
								poster={movie.poster_path}
								votes={movie.vote_average}
							/>
						);
					})}
			</HorizontalSlider>
		</Container>
	);
};
