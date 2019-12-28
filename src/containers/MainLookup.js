import React from 'react'
import LookupCard from '../components/LookupCard'
import styled from 'styled-components';
import { StyledTitle } from '../components/styles'

const MainLookup = () => {
  const datas = [
    {
      imageUrl: "https://a0.muscache.com/im/pictures/ef2b9de4-3b78-4c26-9d90-fa1789762ebc.jpg?aki_policy=large",
      text: "숙소"
    }, {
      imageUrl: "https://a0.muscache.com/im/pictures/ef2b9de4-3b78-4c26-9d90-fa1789762ebc.jpg?aki_policy=large",
      text: "체험"
    }, {
      imageUrl: "https://a0.muscache.com/im/pictures/ef2b9de4-3b78-4c26-9d90-fa1789762ebc.jpg?aki_policy=large",
      text: "어드벤쳐"
    }
  ]

  const LookupCards = datas.map((data, index) => {
    const len = datas.length
    return len === index + 1 ?
      <LookupCard imageUrl={data.imageUrl} text={data.text} key={data.text} isLast={true} />
      : <LookupCard imageUrl={data.imageUrl} text={data.text} key={data.text} />
  })

  return (
    <div>
      <StyledTitle>
        에어비앤비 둘러보기
      </StyledTitle>
      <div style={{height:'200px',marginTop:'15px'}}>
        <StyledSliderOuter>
          <StyledSliderInner>
            {LookupCards}
          </StyledSliderInner>
        </StyledSliderOuter>
      </div>
    </div>
  )
}

const StyledSliderOuter = styled.div`
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