import styled from 'styled-components';

export const withMarginTopBottom = element => margin =>
  styled(element)`
    margin-top: ${margin}px;
    margin-bottom: ${margin}px;
  `;
