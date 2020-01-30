import React from 'react'
import MainHeader from '../components/MainHeader'
import MainForm from '../containers/MainForm'
import MainLookup from './MainLookup'
import MainPlusLodgment from './MainPlusLodgment'
import MainAdventure from './MainAdventure'
import MainWorldLodgment from './MainWorldLodgment'
import styled from 'styled-components'

const MainContainer = () => {

  return (
    <div>
      <MainHeader />
      <StyledMainWrapper>
        <MainForm />
        <MainLookup />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <MainPlusLodgment />
        <MainAdventure />
        <MainWorldLodgment />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

      </StyledMainWrapper>
    </div>
  )
}

const StyledMainWrapper = styled.div`
  padding: 24px;

  @media screen and (min-width: 766px) {
    padding: 40px 80px;
  }
`

export default MainContainer