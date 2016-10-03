import React, { Component, PropTypes }  from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import stylesCSS from './App.css';
import { updateCurrencies } from 'redux/actions/currencies';

class App extends Component {

	constructor( ...args ) {

		super( ...args );

		this.timer = false;
		
	}
	
	static displayName = `App`;

	static propTypes = {
		actions: PropTypes.object.isRequired,
		children: PropTypes.any.isRequired
	};


	componentDidMount() {

		this.timer = setInterval( () => {

			this.props.actions.updateCurrencies();

		}, 2000 );

	}
	
	componentWillUnmount() {
		
		clearInterval( this.timer );
		
	}

	render() {

		return (
			<div className={ stylesCSS.root }>
				{ this.props.children }
			</div>
		);

	}

}


const mapDispatchToProps = ( dispatch ) => {
	return {
		actions: bindActionCreators( { updateCurrencies }, dispatch )
	};
};

export default connect( null, mapDispatchToProps )( App );
