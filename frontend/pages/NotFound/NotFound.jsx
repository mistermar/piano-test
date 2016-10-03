import React, { Component, PropTypes } from 'react';
import stylesCSS from './NotFound.css';



const NotFound = () => {

	return (
		<div className={ stylesCSS.root }>
			<div className={ stylesCSS.message }>{ `404: Page not found` }</div>
		</div>
	);

};

NotFound.displayName = `NotFound`;

export default NotFound;
