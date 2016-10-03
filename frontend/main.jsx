import './reset.css';
import 'react-select/dist/react-select.css';
import configureStore from 'redux/store/configureStore';
import React from 'react';
import ReactDOM from 'react-dom';

const RootDOMElement = document.createElement( `div` );

RootDOMElement.style.width  = `100%`;
RootDOMElement.style.height = `100%`;

document.body.appendChild( RootDOMElement );

const store = configureStore();

renderWithHotReload( require( `./components/Root` ).default );

// Hot Module Replacement API
if ( module.hot ) {
	module.hot.accept( `./components/Root`, () => {
		const newRootElement = require( `./components/Root` ).default;

		renderWithHotReload( newRootElement );
	} );
}

function renderWithHotReload( Root ) {
	ReactDOM.render(
		<Root
			store={ store }
		/>,
		RootDOMElement
	);
}
