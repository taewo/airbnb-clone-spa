import React from 'react'
import styled from 'styled-components';

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

const StyledTitle = styled.div`
  font-size: 12px;
  margin-bottom: 8px;
  font-weight: 800;
`

export default TextInput