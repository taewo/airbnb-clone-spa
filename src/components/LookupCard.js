import React from 'react'
import styled from 'styled-components';

const LookupCard = (props) => {
  return (
    <StyledCard isLast={props.isLast} className="rounded-lg">
      <img src={props.imageUrl} alt={props.text} className="rounded-t-lg" />
      <StyledCardFont>
        {props.text}
      </StyledCardFont>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  margin: 8px;
  margin-right: ${props => props.isLast ? '24px' : ''};
  width: 100%;
  height: 150px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  display: inline-block;
`

const StyledCardFont = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: rgb(72, 72, 72);
  padding: 16px;
`

export default LookupCard