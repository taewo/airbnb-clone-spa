import React from 'react'
import MainHeader from '../components/MainHeader'
import MainForm from '../containers/MainForm'
import MainLookup from './MainLookup'
import styled from 'styled-components';

const MainContainer = () => {
  return (
    <div>
      <MainHeader />
      <StyledMainWrapper>
        <MainForm />
        <br></br>
        <br></br>
        <MainLookup />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

      </StyledMainWrapper>
    </div>
  )
}

const StyledMainWrapper = styled.div`
  padding: 24px;
`

export default MainContainer