import React from 'react';
import TextInput from '../components/TextInput'
import SelectBox from '../components/SelectBox'
import Button from '../components/Button'
import '../styles/MainHeader.css'

const MainHeader = () => {
  return (
    <div>
      <div className="main">
        <div className="main__bg md:min-h-screen"></div>
        <div className="main_img_txt">
          특색 있는 숙소와 즐길 거리를 예약하세요.
        </div>
        <div className="main-float-form rounded">
          <div className="main-float-form__txt">
            특색 있는 숙소와 즐길 거리를 예약하세요.
          </div>
          <TextInput
            placeholder="모든 위치"
            title="목적지"
          />
          <div className="flex mb-4">
            <div className="w-1/2">
              <SelectBox
                className="rounded"
                title="체크인"
              />
            </div>
            <div className="w-1/2">
              <SelectBox
                className="rounded"
                title="체크아웃"
              />
            </div>
          </div>
          <SelectBox
            className="rounded"
            title="인원"
          />
          <div className="relative">
            <Button
              color="white"
              backgroundColor="#FF5A5F"
              className="rounded w-20 right-0 absolute"
            >
              검색
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainHeader