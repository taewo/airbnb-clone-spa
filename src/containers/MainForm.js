import React from 'react'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import SelectBox from '../components/SelectBox'


const MainForm = () => {
  const handleInput = (e) => {
    console.log(1111, e.target.value)
  }

  const handleClick = (e) => {
    console.log(333)
  }

  const selectTagOptions = (selectType, startIndex, endIndex) => {
    // select tag 안의 option 값의 배열을 return 한다.
    const result = []
    for (let i=startIndex; i<=endIndex; i++) {
      const obj = {}
      obj.value = i
      obj.txt = `${selectType} ${i}명`
      result.push(obj)
    }
    return result
  }

  return (
    <div className="main-form">
      <TextInput
        placeholder="모든 위치"
        title="목적지"
        handleInput={handleInput}
      />
      <div className="flex mb-4">
        <div className="w-1/2">
          <SelectBox
            className="rounded"
            title="어른"
            data={selectTagOptions('성인', 1, 15)}
          />
        </div>
        <div className="w-1/2">
          <SelectBox
            className="rounded"
            title="어린이"
            data={selectTagOptions('어린이', 0, 5)}
          />
        </div>
      </div>
      <Button
        className="bg-red-500 rounded w-full"
        handleClick={handleClick}
        color="white"
      >검색
      </Button>
    </div>
  )
}

export default MainForm