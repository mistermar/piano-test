import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import ColumnBar from './components/ColumnBar';
import { connect } from 'react-redux';
import LineChart from 'components/common/LineChart';
import { Link } from 'react-router';
import { pairsForSelectOptions } from 'constants/currencies';
import SelectBox from './components/SelectBox';
import { setChosenPair } from 'redux/actions/currencies';
import stylesCSS from './Currencies.css';
import stylesCSSCommon from 'styles/common.css';

// eslint-disable-next-line
class Currencies extends Component {

	static displayName = `Currencies`;

	static propTypes = {
		actions: PropTypes.object.isRequired,
		chosenPair: PropTypes.string.isRequired,
		pairsData: PropTypes.object.isRequired
	};

	render() {

		const { actions, chosenPair, pairsData } = this.props;


		return (
			<div className={ stylesCSSCommon.root }>
				<div className={ stylesCSSCommon.content }>
					<SelectBox
						chosenPair={ chosenPair }
						currencyPairs={ pairsForSelectOptions }
						setChosenPair={ actions.setChosenPair }
					/>

					<LineChart
						height={ 300 }
						label={ chosenPair }
						pairData={ pairsData[ chosenPair ] }
						width={ 700 }
					/>

					<div className={ stylesCSS.link }>
						<Link to={ `${ chosenPair }` }>{ `Подробнее` }</Link>
					</div>

					<ColumnBar
						chosenPair={ chosenPair }
						height={ 300 }
						pairsData={ pairsData }
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

const mapDispatchToProps = ( dispatch ) => {
	return {
		actions: bindActionCreators( { setChosenPair }, dispatch )
	};
};

export default connect( mapStateToProps, mapDispatchToProps )( Currencies );
