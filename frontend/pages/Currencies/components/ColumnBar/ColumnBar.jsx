import React, { Component, PropTypes } from 'react';
import { BarChart } from 'react-d3-components';
import radium from 'radium';
import stylesJSS from './ColumnBar.jss.js';

class ColumnBar extends Component {

	static displayName = `ColumnBar`;

	static propTypes = {
		chosenPair: PropTypes.string.isRequired,
		pairsData: PropTypes.object.isRequired,
		height: PropTypes.oneOfType( [
			PropTypes.string,
			PropTypes.number
		] ),
		width: PropTypes.oneOfType( [
			PropTypes.string,
			PropTypes.number
		] )
	};

	generateData() {

		const { pairsData } = this.props;

		const data = [
			{
				name: `rate`,
				values: []
			}
		];

		for ( const key in pairsData ) {
			if ( pairsData.hasOwnProperty( key ) ) {

				data[ 0 ].values.push(
					{
						x: key,
						y: pairsData[ key ][ pairsData[ key ].length - 1 ].rate
					}
				);

			}
		}

		return data;

	}

	renderContent() {

		const { chosenPair, pairsData } = this.props;

		if ( pairsData[ chosenPair ].length === 0 ) {

			return false;

		}

		const { width, height } = this.props;

		const data = this.generateData();

		return (
			<BarChart
				data={ data }
				height={ height || 300 }
				margin={ stylesJSS.barChartMargin }
				width={ width || 700 }
			/>
		);

	}

	render() {

		return (
			<div style={ stylesJSS.root }>
				{ this.renderContent() }
			</div>
		);

	}

}
export default radium( ColumnBar );

