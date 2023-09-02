import styled from 'styled-components';

export const TypesButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  button {
    cursor: pointer;
    padding: 20px 25px;
    font-size: 16px;
    font-weight: bold;
    display: inline-block;
    border-radius: 8px;
    border: 1px solid #5a5d77;
    &:hover {
      color: #fff;
      background: #5a5d77;
    }
  }
`;
