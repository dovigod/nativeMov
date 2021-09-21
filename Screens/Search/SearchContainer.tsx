import React, { useState, useEffect } from 'react';
import { movieApi } from '../../api';
import SearchPresenter from './SearchPresenter';

export default () => {
	const [keyword, setKeyword] = useState('');
	const [results, setResults] = useState({
		movies: [],
		moviesError: null
	});
	const onChange = (query: string) => setKeyword(query);

	const search = async () => {
		const [movies, moviesError] = await movieApi.search(keyword);

		setResults({
			movies: movies,
			moviesError
		});
	};
	const refreshing = async () => {
		console.log('refresh!');
	};

	return (
		<SearchPresenter
			refreshingFunction={refreshing}
			{...results}
			onChange={onChange}
			onSubmit={search}
			keyword={keyword}
		/>
	);
};
