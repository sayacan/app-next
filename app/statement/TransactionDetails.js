import React from 'react';
import { shortDateStr } from '../common/DateUtils';

export default class TransactionDetails {

	static propTypes = {
		transaction: React.PropTypes.object.isRequired,
	};

	render() {
		const { transaction } = this.props;

		// const returnOnContract = ((contract.bid_price - contract.buy_price) * 100 / contract.buy_price).toFixed(2);

		return (
			<div>
				<table>
					<thead>
						<tr>
							<th>Start Time</th>
							<th>End Time</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{shortDateStr(transaction.transaction_time)}</td>
							<td>??????</td>
						</tr>
					</tbody>
					<thead>
						<tr>
							<th>Entry Spot</th>
							<th>Exit Spot</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{transaction.entry_spot}</td>
							<td>{transaction.exit_spot}</td>
						</tr>
					</tbody>
					<thead>
						<tr>
							<th>Purchase Price</th>
							<th>Final Price</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{transaction.currency}&nbsp;{transaction.amount}</td>
							<td>{transaction.currency}&nbsp;{transaction.final_price}</td>
						</tr>
						<tr>
							<td></td>
							<td>???</td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
