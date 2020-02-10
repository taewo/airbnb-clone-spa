import React from 'react'
import styled from 'styled-components';
import * as bor from '../config/variables'

const Container = styled.div`
  border: 1px dotted red;
  width: 100%;
  height: 86%;
  padding: 10px;

  .calendar {
    border: 1px solid blue;
  }

  .day-of-weeks, .days {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid red;
  }

  .day-of-week {
    border: 1px solid blue;
    width: 28px;
    text-align: center;
  }

  .day {
    border: 1px solid ${bor.BORDER_1};
    width: 28px;
    text-align: center;
  }
`

const Calendar = () => {
  return (
    <Container>
      <div class="calendar">
        <ul class="day-of-weeks">
          <li class="day-of-week">일</li>
          <li class="day-of-week">월</li>
          <li class="day-of-week">화</li>
          <li class="day-of-week">수</li>
          <li class="day-of-week">목</li>
          <li class="day-of-week">금</li>
          <li class="day-of-week">토</li>
        </ul>
        <ul class="days">
          <li class="day"></li>
          <li class="day"></li>
          <li class="day"></li>
          <li class="day"></li>
          <li class="day"></li>
          <li class="day"></li>
          <li class="day">1</li>
        </ul>
        <ul class="days">
          <li class="day">2</li>
          <li class="day">3</li>
          <li class="day">4</li>
          <li class="day">5</li>
          <li class="day">6</li>
          <li class="day">7</li>
          <li class="day">8</li>
        </ul>
        <ul class="days">
          <li class="day">2</li>
          <li class="day">3</li>
          <li class="day">4</li>
          <li class="day">5</li>
          <li class="day">6</li>
          <li class="day">7</li>
          <li class="day">8</li>
        </ul>
        <ul class="days">
          <li class="day">2</li>
          <li class="day">3</li>
          <li class="day">4</li>
          <li class="day">5</li>
          <li class="day">6</li>
          <li class="day">7</li>
          <li class="day">8</li>
        </ul>
        <ul class="days">
          <li class="day">2</li>
          <li class="day">3</li>
          <li class="day">4</li>
          <li class="day">5</li>
          <li class="day">6</li>
          <li class="day">7</li>
          <li class="day">8</li>
        </ul>
        <ul class="days">
          <li class="day">2</li>
          <li class="day">3</li>
          <li class="day">4</li>
          <li class="day">5</li>
          <li class="day">6</li>
          <li class="day">7</li>
          <li class="day">8</li>
        </ul>
        <ul class="days">
          <li class="day">2</li>
          <li class="day">3</li>
          <li class="day">4</li>
          <li class="day">5</li>
          <li class="day">6</li>
          <li class="day">7</li>
          <li class="day">8</li>
        </ul>
        <ul class="days">
          <li class="day"></li>
          <li class="day"></li>
          <li class="day"></li>
          <li class="day"></li>
          <li class="day"></li>
          <li class="day"></li>
          <li class="day">1</li>
        </ul>
      </div>
    </Container>
  )
}

export default Calendar