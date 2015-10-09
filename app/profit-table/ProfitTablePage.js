import React from 'react';
import { connect } from 'react-redux';
import { MobilePage } from '../common';
import ProfitTablePane from './ProfitTablePane';

@connect(state => ({ profitTable: state.profitTable }))
export default class ProfitTablePage extends React.Component {

	static propTypes = {
		profitTable: React.PropTypes.object,
		dispatch: React.PropTypes.func,
	};

	render() {
		return (
			<MobilePage>
				<ProfitTablePane {...this.props} />
			</MobilePage>
		);
	}
}