import React from 'react'
import { StyledTitle, StyledSubTitle, StyledMainContentWrapper } from '../components/styles'
import LongContentCard from '../components/LongContentCard'

const MainAdventure = () => {
  const datas = [
    {
      nation: '노르웨이',
      desc: '2 Nights PACKAGE All Inclusive',
      price: '1인당 ￦764,397부터',
      stats: 5.0,
      reviews: 20,
      imageUrl: 'https://a0.muscache.com/im/pictures/64c23cf2-4833-4506-ab06-c943c7489709.jpg?aki_policy=poster'
    }, {
      nation: '베트남',
      desc: '베트남의 아름다운 깟바섬 투어',
      price: '1인당 ￦200,744부터',
      stats: 4.92,
      reviews: 2,
      imageUrl: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-494480-media_library/original/e1833c17-0665-47a1-8166-a15b46a0a4d3.jpeg?aki_policy=poster'
    }, {
      nation: '쿠바',
      desc: 'Trinidad Salsa, Nature & Beach 4-day',
      price: '1인당 ￦610,809부터',
      stats: 4.5,
      reviews: 6,
      imageUrl: 'https://a0.muscache.com/im/pictures/8223757b-d345-4a55-8fdd-b1d766166ecd.jpg?aki_policy=poster'
    }, {
      nation: '노르웨이',
      desc: 'Northern Lights Hiking with Overnight',
      price: '1인당 ￦255,249부터',
      stats: 4.7,
      reviews: 16,
      imageUrl: 'https://a0.muscache.com/im/pictures/9e337118-e34d-4edd-bfd4-0e5bca1bb0d4.jpg?aki_policy=poster'
    }
  ]

  const LongContentCards = datas.map((data) => {
    return (
      <LongContentCard
        nation={data.nation}
        desc={data.desc}
        price={data.price}
        stats={data.stats}
        reviews={data.reviews}
        imageUrl={data.imageUrl}
      />
    )
  })

  return (
    <StyledMainContentWrapper>
      <StyledTitle>
        에어비앤비 어드벤처를 소개합니다.
      </StyledTitle>
      <StyledSubTitle>
        현지 전문가가 진행하는 2일 이상의 여행 - 액티비티, 식사, 숙소 포함
      </StyledSubTitle><br></br>
      <div className="flex flex-wrap mb-4">
        {LongContentCards}
      </div>
    </StyledMainContentWrapper>
  )
}

export default MainAdventure