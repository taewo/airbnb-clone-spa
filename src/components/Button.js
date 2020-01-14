import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'

const Button = (props) => {
  const buttonClass = classNames(props.className)

  return (
    <StyledButton onClick={props.handleClick} className={buttonClass} color={props.color} border={props.border} backgroundColor={props.backgroundColor}>
      {props.children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  height: 48px;
  color: ${props => props.color};
  border: ${props => props.border};
  background-color: ${props => props.backgroundColor};
`

export default Button