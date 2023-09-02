import './App.css';
import React, { useState } from 'react';

import { other, basic, units, ielts } from './database';

import {
  ButtonStyled,
  MainWrapper,
  SelectedWordsWrapperStyled,
  TypesButtonContainer,
} from './styled';
import LearningPage from './components/LearningPage';
import { TYPE } from './constants';

function App() {
  const [openedItem, setOpenedItem] = useState(false);
  const [selectedWords, setSelectedWords] = useState([]);
  const [selectedWordsKey, setSelectedWordsKey] = useState('');
  const [isShownTranslation, setIsShownTranslation] = useState(false);

  const [selectedType, setSelectedType] = useState('');
  const [isStarted, setIsStarted] = useState(false);

  const allWords = { ...other, ...basic, ...units, ...ielts };

  const handleClick = key => {
    setOpenedItem(true);
    setSelectedWords(allWords[key]);
    setSelectedWordsKey(key);
    setIsShownTranslation(false);
    setIsStarted(false);
  };

  const handleLearningType = type => {
    setSelectedType(type);
    setIsStarted(false);
  };

  return (
    <MainWrapper>
      <TypesButtonContainer>
        {Object.keys(allWords).map(wordsKey => (
          <button onClick={() => handleClick(wordsKey)}>{wordsKey}</button>
        ))}
      </TypesButtonContainer>

      {openedItem && (
        <SelectedWordsWrapperStyled>
          <div className="learning-types-buttons">
            {Object.values(TYPE).map(type => (
              <ButtonStyled onClick={() => handleLearningType(type)}>{type}</ButtonStyled>
            ))}
          </div>

          {selectedType && (
            <LearningPage
              selectedWords={selectedWords}
              selectedWordsKey={selectedWordsKey}
              isShownTranslation={isShownTranslation}
              setIsShownTranslation={setIsShownTranslation}
              isStarted={isStarted}
              setIsStarted={setIsStarted}
              selectedType={selectedType}
            />
          )}
        </SelectedWordsWrapperStyled>
      )}
    </MainWrapper>
  );
}

export default App;
