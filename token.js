export const getPrevToken = (tokens, i) => {

	const tokensStartMarker = {
		name: 'tokensStart',
		type: 'marker'
	};

	return (i > 0) ? tokens[i - 1] : tokensStartMarker;

};

export const getNextToken = (tokens, i) => {

	const tokensEndMarker = {
		name: 'tokensEnd',
		type: 'marker'
	};

	return (i < (l - 1)) ? tokens[i + 1] : tokensEndMarker;

};