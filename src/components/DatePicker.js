import React from 'react';
import styled from 'styled-components';
import { StyledInputTitle } from './styles';
import '../styles/DatePicker.css';

const DatePicker = () => {
	return (
		<div className="flex date-picker">
			<div className="w-1/2">
				<StyledInputTitle>체크인</StyledInputTitle>
				<div className="select-wrap rounded">
					<input type="text" placeholder="년/월/일" readOnly />
				</div>
			</div>
			<div className="w-1/2">
				<StyledInputTitle>체크아웃</StyledInputTitle>
				<div className="select-wrap rounded">
					<input type="text" placeholder="년/월/일" readOnly />
				</div>
			</div>
			<div className="popup">
				<div className="popup__header">
					<svg focusable="false" viewBox="0 0 1000 1000">
						<path d="M336 275L126 485h806c13 0 23 10 23 23s-10 23-23 23H126l210 210c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7L55 524c-11-11-11-21 0-32l249-249c21-22 53 10 32 32z" />
					</svg>
				</div>
				<div className="popup_content">22</div>
			</div>
		</div>
	);
};

export default DatePicker;
