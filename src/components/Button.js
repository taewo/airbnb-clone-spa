import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'

const Button = (props) => {
  const buttonClass = classNames(props.className)

  return (
    <StyledButton onClick={props.handleClick} className={buttonClass}>
      {props.children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  height: 48px;
  color: white;
`

export default Button