import React from 'react'
import MainHeader from '../components/MainHeader'
import MainForm from '../containers/MainForm'
import MainLookup from './MainLookup'
import MainPlusLodgment from './MainPlusLodgment'
import MainAdventure from './MainAdventure'
import styled from 'styled-components'

const MainContainer = () => {

  return (
    <div>
      <MainHeader />
      <StyledMainWrapper>
        <MainForm />
        <br></br>
        <br></br>
        <MainLookup />
        <MainPlusLodgment />
        <MainAdventure />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
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