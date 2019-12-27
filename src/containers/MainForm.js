import React from 'react'
import Button from '../components/Button'
import TextInput from '../components/TextInput'

const MainForm = () => {

  const handleInput = (e) => {
    console.log(1111, e.target.value)
  }

  const handleClick = (e) => {
    console.log(333)
  }

  return (
    <div>
      <TextInput
        placeholder="모든 위치"
        title="목적지"
        handleInput={handleInput}
      />
      <Button
        className="bg-red-500 rounded w-full"
        handleClick={handleClick}
      >검색
      </Button>
    </div>
  )
}

export default MainForm