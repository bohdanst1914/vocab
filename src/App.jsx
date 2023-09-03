import './App.css';
import React, { useEffect, useState } from 'react';

import { other, basic, units, ielts } from './database';

import {
  MainWrapper,
  PrimaryButtonStyled,
  SecondaryButtonStyled,
  SelectedWordsWrapperStyled,
  TypesButtonContainer,
} from './styles';
import LearningPage from './components/LearningPage';
import { TYPE } from './constants';
import { withMarginTopBottom } from './styles/basicStyled';

const WithMarginTopBottom = withMarginTopBottom('div')('5');

function App() {
  const [openedItem, setOpenedItem] = useState(false);
  const [selectedWords, setSelectedWords] = useState([]);
  const [selectedWordsKey, setSelectedWordsKey] = useState('');
  const [isShownTranslation, setIsShownTranslation] = useState(false);

  const [selectedType, setSelectedType] = useState('');
  const [isStarted, setIsStarted] = useState(false);
  const [showWordsList, setShowWordsList] = useState(false);
  const [showWordGroups, setShowWordGroups] = useState(true);
  const [showLearningTypes, setShowLearningTypes] = useState(true);

  const allWords = { ...other, ...basic, ...units, ...ielts };
  const wordsListButtonName = showWordsList ? 'Сховати список слів' : 'Показати список слів';

  useEffect(() => {
    if (isStarted) {
      setShowWordGroups(false);
      setShowLearningTypes(false);
    }
  }, [isStarted]);

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
    setShowLearningTypes(false);
  };

  const handleChooseOtherCategory = () => setShowWordGroups(true);

  return (
    <MainWrapper>
      {showWordGroups && (
        <TypesButtonContainer>
          {Object.keys(allWords).map(wordsKey => (
            <button onClick={() => handleClick(wordsKey)}>{wordsKey}</button>
          ))}
        </TypesButtonContainer>
      )}

      {openedItem && (
        <SelectedWordsWrapperStyled>
          {!showWordGroups && (
            <PrimaryButtonStyled className="choose-other" onClick={handleChooseOtherCategory}>
              Вибрати інакшу групу слів
            </PrimaryButtonStyled>
          )}

          <WithMarginTopBottom>
            <SecondaryButtonStyled onClick={() => setShowWordsList(!showWordsList)}>
              {wordsListButtonName}
            </SecondaryButtonStyled>
          </WithMarginTopBottom>

          {showWordsList && (
            <table className="selected-words-list">
              {selectedWords.map((word, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{word.words_eng}</td>
                  <td>{word.translate}</td>
                </tr>
              ))}
            </table>
          )}

          {showLearningTypes ? (
            <div className="learning-types-buttons">
              {Object.values(TYPE).map(type => (
                <PrimaryButtonStyled onClick={() => handleLearningType(type)}>
                  {type}
                </PrimaryButtonStyled>
              ))}
            </div>
          ) : (
            <PrimaryButtonStyled
              className="choose-other"
              onClick={() => setShowLearningTypes(!showLearningTypes)}
            >
              Вибрати інакший стиль
            </PrimaryButtonStyled>
          )}

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
