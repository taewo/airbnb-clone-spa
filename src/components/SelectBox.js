import React from 'react'
import styled from 'styled-components';
import classNames from 'classnames'
import { StyledTitle } from './styles'

const SelectBox = (props) => {
  const selectBoxClass = classNames(props.className)
  const options = props.data.map((val, index) => {
    return (
      <option value={val.value} key={val.value}>{val.txt}</option>
    )
  })
  return (
    <div style={{marginBottom: "16px"}}>
      <StyledTitle>
        {props.title}
      </StyledTitle>
      <StyledSelectBoxWrapper className={selectBoxClass}>
        <StyledSelectBox >
          {options}
        </StyledSelectBox>
      </StyledSelectBoxWrapper>
    </div>
      
  )
}

const StyledSelectBoxWrapper = styled.div`
  border: 1px solid #EBEBEB;
  height: 48px;
  padding: 0 12px;

`

const StyledSelectBox = styled.select`
  width: 100%;
  height: 100%;
  outline: none;
  background-color: white;
`

export default SelectBox