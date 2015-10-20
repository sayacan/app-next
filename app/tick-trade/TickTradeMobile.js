import React from 'react';
import { MobilePage } from '../common';
import TickTradeContainer from './TickTradeContainer';

export default (props) => (
	<MobilePage>
		<TickTradeContainer compact={true} {...props} />
	</MobilePage>
);