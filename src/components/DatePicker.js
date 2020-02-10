import React from 'react';
import styled from 'styled-components';
import { StyledInputTitle } from './styles';
import Calendar from './Calendar'
import * as bor from '../config/variables'

const Container = styled.div`
	.date-picker {
		position: relative;
		border: 1px solid red;
	}

	.date-picker .select-wrap {
		border: 1px solid #ebebeb;
		height: 48px;
		padding: 0 12px;
	}

	.date-picker .select-wrap input {
		height: 100%;
		width: 100%;
		outline: none;
	}

	.date-picker .calendar-popup {
		border: 1px solid ${bor.BORDER_1};
		width: 277px;
		height: 274px;
		position: absolute;
		left: 0;
		bottom: -376%;
		background-color: white;
		z-index: 10;
	}

	.calendar-popup__header {
		display: flex;
		justify-content: space-around;
		align-content: center;
	}

	.svg-container {
		padding: 9px;
    display: inline-block;
    border: 1px solid ${bor.BORDER_1};
	}

	.date-picker svg {
		width: 19px;
	}



`

const DatePicker = () => {
	return (
		<Container>
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
				<div className="calendar-popup">
					<div className="calendar-popup__header">
						<div className="svg-container">
							<svg focusable="false" viewBox="0 0 1000 1000">
								<path d="M336 275L126 485h806c13 0 23 10 23 23s-10 23-23 23H126l210 210c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7L55 524c-11-11-11-21 0-32l249-249c21-22 53 10 32 32z" />
							</svg>
						</div>
						<div>2월 2020</div>
						<div className="svg-container">
							<svg class="_1ri93fe" focusable="false" viewBox="0 0 1000 1000"><path d="M694 242l249 250c12 11 12 21 1 32L694 773c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210-210H68c-13 0-23-10-23-23s10-23 23-23h806L662 275c-21-22 11-54 32-33z"></path></svg>
						</div>
					</div>
					<Calendar></Calendar>
				</div>
			</div>
		</Container>
	);
};

export default DatePicker;
