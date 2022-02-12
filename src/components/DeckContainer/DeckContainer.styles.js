import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  
  .ant-btn {
    margin-left: auto;
    margin-bottom: 32px;
    transition: all 0.3s ease;
  }
  
  .grid {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -16px;
  }

  .item {
    width: calc(100% / 6);
    padding: 0 16px 32px;
  }
  
  .item__content {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 25px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    height: 100%;
    transition: all 0.3s ease;
    cursor: pointer;
    
    &:hover {
      border-color: #40a9ff;
      color: #40a9ff;
    }
  }
`
