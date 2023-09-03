import styled from 'styled-components';

export const SelectedWordsWrapperStyled = styled.div`
  margin: 50px auto;
  width: 60%;
  @media (max-width: 992px) {
    width: 80%;
  }
  .selected-words-list {
    margin-bottom: 5px;
    width: 100%;

    td {
      border: 1px solid green;
      text-align: center;
      padding: 5px;
      font-size: 16px;
    }
    tr:hover {
      background-color: rgba(120, 120, 120, 0.7);
      color: #fff;
      cursor: pointer;
    }
  }

  .learning-types-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 10px;
    button {
      flex: 1;
    }
  }

  .header {
    display: flex;
    align-items: flex-start;

    p {
      background: wheat;
      display: inline-block;
      padding: 10px;
      border-radius: 8px;
      margin-top: 0;
      margin-bottom: 5px;
    }
    &__selected {
      flex-grow: 1;
      text-align: center;
    }
    &__count {
      margin-left: 5px;
      font-weight: bold;
    }
  }

  .shown-word {
    font-size: 40px;
    padding: 30px;
    text-align: center;
    background: wheat;
    border-radius: 8px;
    margin: 0 auto 40px;
    @media (max-width: 662px) {
      margin: 0 auto 20px;
      font-size: 30px;
      padding: 15px;
    }
  }

  input {
    width: calc(100% - 40px);
    padding: 20px;
    font-size: 20px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid silver;
    color: #181818;
    &.bad {
      background: rgba(255, 0, 0, 0.1);
    }
    &.good {
      background: rgba(0, 128, 0, 0.1);
    }
  }

  .next-word__button {
    margin-left: 10px;
  }

  .forms-button {
    border: none;
    font-size: 24px;
    padding: 10px 20px;
    border-radius: 4px;
    background: rgba(255, 255, 0, 0.3);
    cursor: pointer;
    &:hover {
      background: rgba(255, 255, 0, 0.8);
    }
  }

  .show-word_text {
    box-sizing: border-box;
    display: inline-block;
    text-align: center;
    padding: 15px 20px;
    font-size: 24px;
    background: mediumaquamarine;
    border-radius: 4px;
    @media (max-width: 662px) {
      margin-top: 5px;
      width: 100%;
      padding: 10px 15px;
    }
    &.hide {
      visibility: hidden;
    }
    &.show {
      visibility: visible;
    }
  }

  .vocabulary-buttons {
    margin-top: 20px;
  }

  .finish {
    color: wheat;
    font-size: 50px;
    font-weight: bold;
    padding: 40px;
    text-align: center;
    background: rgba(0, 100, 100, 0.3);
    border-radius: 8px;
    margin-bottom: 50px;
  }

  .position-left {
    display: flex;
    justify-content: flex-end;
    margin: 5px 0;
  }

  .choose-other {
    width: 100%;
    margin-bottom: 5px;
  }
  .words-list-button {
    width: 100%;
  }
`;
