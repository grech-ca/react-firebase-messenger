import { FC } from 'react';

import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export const GlobalStyles: FC = () => {
  return (
    <Global
      styles={css`
        ${emotionReset}
        html, body, #root {
          height: 100%;
        }
      `}
    />
  );
};
