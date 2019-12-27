import React from 'react'
import MainHeader from '../components/MainHeader'
import MainForm from '../containers/MainForm'
import styled from 'styled-components';

const MainContainer = () => {
  return (
    <div>
      <MainHeader />
      <StyledMainFormWrapper>
        <MainForm />
      </StyledMainFormWrapper>
    </div>
  )
}

const StyledMainFormWrapper = styled.div`
  padding: 24px;
`

export default MainContainer