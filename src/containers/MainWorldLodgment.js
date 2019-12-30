import React from 'react'
import { StyledTitle, StyledSubTitle, StyledMainContentWrapper } from '../components/styles'
import SmallContentCard from '../components/SmallContentCard'

const MainWorldLodgment = () => {
  const SmallContentCards = [1, 2, 3].map((data) => {
    return (
      <SmallContentCard key={data} />
    )
  })

  return (
    <StyledMainContentWrapper>
      <StyledTitle>
        전 세계 숙소
      </StyledTitle>
      <div className="flex flex-wrap mb-4">
        {SmallContentCards}
      </div>
    </StyledMainContentWrapper>

  )
}

export default MainWorldLodgment