import React, { Component, PropTypes } from 'react';
import { VictoryAxis, VictoryChart, VictoryGroup, VictoryLabel, VictoryLine, VictoryScatter } from 'victory';
import moment from 'moment';
import radium from 'radium';
import stylesJSS from './LineChart.jss.js';

class LineGraph extends Component {

	static displayName = `LineGraph`;

	static propTypes = {
		label: PropTypes.string.isRequired,
		pairData: PropTypes.array.isRequired,
		height: PropTypes.oneOfType( [
			PropTypes.string,
			PropTypes.number
		] ),
		width: PropTypes.oneOfType( [
			PropTypes.string,
			PropTypes.number
		] )
	};

	generateParams() {

		const { pairData } = this.props;

		const yArray = pairData.map( ( pair ) => {

			return pair.rate;

		} );

		const xArray = pairData.map( ( pair ) => {

			return pair.date;

		} );

		const tickValues = xArray.length > 2 ?
			[ xArray[ 0 ], xArray[ Math.floor( xArray.length / 2 ) ], xArray[ xArray.length - 1 ] ] :
			[ xArray[ 0 ], xArray[ 1 ] ];

		return {
			line: {
				domain: { y: [ Math.min( ...yArray ) - 0.2, Math.max( ...yArray ) + 0.2 ] }
			},
			xAxis: {
				tickFormat( x ) {
					return moment( x ).format( `DD/MM h:mm:ss` );
				},
				tickValues

			}
		};

	}

	renderContent() {

		const { width, height, pairData } = this.props;

		if ( pairData.length < 2 ) {

			return false;

		}

		const params = this.generateParams();

		return (
			<VictoryChart
				height={ height }
				width={ width - 100 }
			>
				<VictoryAxis
					style={ stylesJSS.axis }
					tickFormat={ params.xAxis.tickFormat }
					tickValues={ params.xAxis.tickValues }
				/>
				<VictoryAxis
					dependentAxis={ true }
					style={ stylesJSS.axis }
				/>
				<VictoryLine
					data={ pairData }
					domain={ params.line.domain }
					style={ stylesJSS.line }
					x={ `date` }
					y={ `rate` }
				/>

				<VictoryScatter
					data={ pairData }
					domain={ params.line.domain }
					size={ 4 }
					style={ stylesJSS.scatter }
					x={ `date` }
					y={ `rate` }
				/>

			</VictoryChart>
		);

	}

	render() {

		const { label, width, height } = this.props;

		return (
			<svg style={ stylesJSS.root( width, height ) }>
				<VictoryLabel
					textAnchor={ `middle` }
					verticalAnchor={ `start` }
					x={ width / 2 }
					y={ 20 }
				>
					{ label }
				</VictoryLabel>
				{ this.renderContent() }
			</svg>
		);

	}

}

export default radium( LineGraph );
