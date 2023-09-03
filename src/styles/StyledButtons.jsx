import styled from 'styled-components';

export const PrimaryButtonStyled = styled.button`
  font-size: 24px;
  padding: 10px 20px;
  border-radius: 4px;
  background: #fff;
  border: 1px solid #047970;
  color: #047970;
  cursor: pointer;
  &:hover {
    color: #fff;
    background: #047970;
  }
  @media (max-width: 662px) {
    font-size: 20px;
  }
`;

export const SecondaryButtonStyled = styled.button`
  width: 100%;
  font-size: 24px;
  padding: 10px 20px;
  border-radius: 4px;
  background: #d0d1d8;
  border: 1px solid #13173d;
  color: #13173d;
  cursor: pointer;
  &:hover {
    background: #b8b9c5;
  }
  @media (max-width: 662px) {
    font-size: 20px;
  }
`;
