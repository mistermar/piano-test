import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import LineChart from 'components/common/LineChart';
import { Link } from 'react-router';
import { setChosenPair } from 'redux/actions/currencies';
import stylesCSS from './PairDetail.css';
import stylesCSSCommon from 'styles/common.css';

// eslint-disable-next-line
class Currencies extends Component {

	static displayName = `Currencies`;

	static propTypes = {
		chosenPair: PropTypes.string.isRequired,
		pairsData: PropTypes.object.isRequired
	};

	render() {

		const { chosenPair, pairsData } = this.props;

		return (
			<div className={ stylesCSSCommon.root }>
				<div className={ stylesCSSCommon.content }>

					<Link to={ `/` }>{ `Назад` }</Link>

					<LineChart
						height={ 300 }
						label={ chosenPair }
						pairData={ pairsData[ chosenPair ] }
						width={ 700 }
					/>

				</div>

			</div>
		);

	}

}

const mapStateToProps = ( state ) => {

	const chosenPair = state.currencies.get( `chosen` );

	return {

		pairsData: state.currencies.get( `pairs` ).toJS(),
		chosenPair

	};

};

export default connect( mapStateToProps )( Currencies );
