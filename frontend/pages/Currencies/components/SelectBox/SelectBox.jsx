import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
import stylesCSS from './SelectBox.css';

// eslint-disable-next-line
class Currencies extends Component {

	static displayName = `Currencies`;

	static propTypes = {
		chosenPair: PropTypes.string.isRequired,
		currencyPairs: PropTypes.array.isRequired,
		setChosenPair: PropTypes.func.isRequired
	};

	handleSelectPair = ( pair ) => {

		if ( pair ) {

			this.props.setChosenPair( pair.value );

			return true;
		}

		return false;

	};

	render() {

		const { chosenPair, currencyPairs } = this.props;

		return (
			<div className={ stylesCSS.root }>
				<Select
					options={ currencyPairs }
					value={ chosenPair }
					onChange={ this.handleSelectPair }
				/>
			</div>
		);

	}

}

export default Currencies;
