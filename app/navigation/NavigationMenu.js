import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { NumberPlain, LanguagePicker } from '../common';

@connect(state => ({ account: state.account }))
export default class NavigationMenu extends React.Component {

	static propTypes = {
		account: React.PropTypes.object.isRequired,
	};

	render() {
		const account = this.props.account.toJS();
		return (
			<nav className="sidebar">
			    <label>{account.loginid} (switcher)</label>
				<label>Account balance: <NumberPlain currency={account.currency} value={account.balance} /></label>
				<Link to={`/tick-trade`} className="sidebar-btn" activeClassName="active">Trade</Link>
				<Link to={`/portfolio`} className="sidebar-btn" activeClassName="active">Open Positions</Link>
				<Link to={`/statement`} className="sidebar-btn" activeClassName="active">Statement</Link>
				<LanguagePicker />
				<Link to={`/settings`} className="sidebar-btn" activeClassName="active">Settings</Link>
				<Link to={`/`} className="sidebar-btn" activeClassName="active">Sign Out</Link>
			</nav>
		);
	}
}