import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
  .answers-container {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
  }
  
  .ant-collapse-header {
    font-size: 200%;
  }
  
  .answer-button-1 {
    background-color: indianred;
  }

  .answer-button-2 {
    background-color: goldenrod;
  }

  .answer-button-3 {
    background-color: aquamarine;
  }

  .answer-button-4 {
    background-color: dodgerblue;
  }

  p {
    text-align: center;
    font-size: 300%;
  }
`