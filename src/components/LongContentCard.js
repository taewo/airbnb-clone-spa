import React from 'react';
import { StyledContentCardWrapper } from '../components/styles';
import '../styles/LongContentCard.css';

const LongContentCard = (props) => {
	return (
		<div className="w-1/2">
			<StyledContentCardWrapper>
				<div className="longcontentcard_img_wrap rounded-lg">
					<img src={props.imageUrl} alt={props.nation} />
				</div>
				<div className="longcontentcard_subtitle">{props.nation}</div>
				<div>{props.desc}</div>
				<div>{props.price}</div>
				<div className="longcontentcard_subtitle">
					★ {props.stats} ({props.reviews})
				</div>
			</StyledContentCardWrapper>
		</div>
	);
};

export default LongContentCard;
