import React, { useEffect, useMemo, useRef, useState } from 'react';
import { concatAndMix, mixWords } from './utils';
import { PrimaryButtonStyled } from '../styles';
import { TYPE } from '../constants';

const mixWordsFalse = (type, selectedWords) => {
  const mixedWords = mixWords(selectedWords);
  if (type === TYPE.DOUBLE_REPETITION) {
    return concatAndMix(mixedWords);
  }
  if (type === TYPE.WRITING) {
    return mixedWords.map(item => ({ ...item, write: true }));
  }
  return mixedWords;
};

const cleanPhases = text => text.trim().toLowerCase().replace(/\s+/g, ' ');

const LearningPage = ({
  selectedWords,
  selectedWordsKey,
  isShownTranslation,
  setIsShownTranslation,
  selectedType,
  isStarted,
  setIsStarted,
}) => {
  const btnRef = useRef();

  const [wordsToLearn, setWordsToLearn] = useState([]);

  const [inputValue, setInputValue] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [inputClassName, setInputClassName] = useState('');

  useEffect(() => {
    const mixedWords = mixWordsFalse(selectedType, selectedWords);
    setWordsToLearn(mixedWords);
  }, [selectedType, selectedWords]);

  const nextButtonClick = () => {
    const filteredArray = wordsToLearn.filter((_, index) => index !== 0);
    setWordsToLearn(filteredArray);
    setIsShownTranslation(false);
    setInputValue('');
    setIsCorrect(false);
    setInputClassName('');
  };

  useEffect(() => {
    if (wordsToLearn.length && (!wordsToLearn[0].write || isCorrect)) {
      btnRef.current?.focus();
    }
  }, [isCorrect, wordsToLearn]);

  const shownTranslationWord = useMemo(() => {
    if (wordsToLearn.length) {
      return !wordsToLearn[0].write ? wordsToLearn[0].translate : wordsToLearn[0].words_eng;
    }
    return null;
  }, [wordsToLearn]);

  const handleCheckWord = ({ target: { value } }) => setInputValue(value);

  const handleStartClick = () => setIsStarted(true);

  const showWordButtonClick = () => {
    setIsShownTranslation(true);
  };
  const shownWord = useMemo(() => {
    if (wordsToLearn.length) {
      return wordsToLearn[0].write ? wordsToLearn[0].translate : wordsToLearn[0].words_eng;
    }
    return null;
  }, [wordsToLearn]);

  const handlerSubmit = event => {
    event.preventDefault();
    if (cleanPhases(inputValue) === cleanPhases(wordsToLearn[0].words_eng)) {
      setIsCorrect(true);
      setInputClassName('good');
    } else {
      setIsCorrect(false);
      setInputClassName('bad');
    }
  };

  return (
    <>
      <div className="header">
        <p className="header__selected">
          Вибрані слова: <strong>{selectedWordsKey}</strong> стиль: <strong>{selectedType}</strong>{' '}
          {!isStarted && (
            <span>
              кількість слів: <strong>{selectedWords.length}</strong>
            </span>
          )}
        </p>
        {isStarted && <p className="header__count">{wordsToLearn.length}</p>}
      </div>

      {!isStarted && (
        <div className="position-left">
          <PrimaryButtonStyled className="next-word__button" onClick={handleStartClick}>
            Почали
          </PrimaryButtonStyled>
        </div>
      )}

      {isStarted && wordsToLearn.length ? (
        <>
          <h2 className="shown-word">{shownWord}</h2>

          {selectedType === TYPE.WRITING && (
            <form onSubmit={handlerSubmit}>
              <input
                type="text"
                className={inputClassName}
                value={inputValue}
                placeholder="write translate word..."
                onChange={handleCheckWord}
              />
            </form>
          )}

          <div className="vocabulary-buttons position-left">
            {!isShownTranslation && (
              <PrimaryButtonStyled className="show-word__button" onClick={showWordButtonClick}>
                Show word
              </PrimaryButtonStyled>
            )}
            {(selectedType !== TYPE.WRITING || isCorrect) && (
              <PrimaryButtonStyled
                ref={btnRef}
                className="next-word__button"
                onClick={nextButtonClick}
              >
                Next
              </PrimaryButtonStyled>
            )}
          </div>

          <div className={`show-word_text ${isShownTranslation ? 'show' : 'hide'}`}>
            {shownTranslationWord}
          </div>
        </>
      ) : null}

      {isStarted && !wordsToLearn.length && <div className="finish">FINISH</div>}
    </>
  );
};
export default LearningPage;
