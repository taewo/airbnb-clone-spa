import React from 'react'
import LookupCard from '../components/LookupCard'
import styled from 'styled-components';
import { StyledTitle } from '../components/styles'

const MainLookup = () => {
  return (
    <div>
      <StyledTitle>
        에어비앤비 둘러보기
      </StyledTitle>
      <StyledSliderOuter>
        <StyledSliderInner>
          <LookupCard />
          <LookupCard />
          <LookupCard />
          <LookupCard />
          <LookupCard />
        </StyledSliderInner>
      </StyledSliderOuter>
    </div>
  )
}

const StyledSliderOuter = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 200px;
  overflow-x: scroll;
  overflow-y: hidden;
  position: absolute;
  left: 0;
  padding-left: 20px;
`

const StyledSliderInner = styled.div`
  height: 100%;
  white-space: nowrap;
`

export default MainLookup