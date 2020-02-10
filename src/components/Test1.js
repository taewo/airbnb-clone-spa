import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid red;
  .fi {
    color: red
  }
`

const Test1 = () => {
  return (
    <Container>
      <div class="fi">1</div>
      <div class="vi">2</div>
    </Container>
  )
}

export default Test1