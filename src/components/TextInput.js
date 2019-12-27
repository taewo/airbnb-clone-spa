import React from 'react'
import styled from 'styled-components';
import { StyledTitle } from './styles'

const TextInput = (props) => {
  return (
    <div style={{marginBottom: "16px"}}>
      <label htmlFor={props.title}>
        <StyledTitle>
          {props.title}
        </StyledTitle>
        <StyledTextInputWrapper className="rounded">
          <StyledTextInput onChange={props.handleInput} placeholder={props.placeholder} id={props.title} />
        </StyledTextInputWrapper>
      </label>
    </div>
  )
}

const StyledTextInputWrapper = styled.div`
  border: 1px solid #EBEBEB;
  padding: 0 12px;
  height: 48px;
`

const StyledTextInput = styled.input`
  color: black;
  width: 100%;
  height: 100%;
  outline: none;
`

export default TextInput