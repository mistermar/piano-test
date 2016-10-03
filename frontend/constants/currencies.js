export const JPYRUB = `JPYRUB`;
export const USDRUB = `USDRUB`;
export const EURRUB = `EURRUB`;

const pairs = [
	JPYRUB,
	USDRUB,
	EURRUB
];


export const pairsForQueryString =  pairs.map( ( pair ) => {

	return `\"${ pair }\"`;

} ).join( `, ` );

export const pairsForSelectOptions = pairs.map( ( pair ) => {

	return {
		value: pair,
		label: pair
	};

} );

export default pairs;

