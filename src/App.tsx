import { FC, Fragment } from 'react';

import { GlobalStyles } from 'styles/GlobalStyles';

export const App: FC = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <div>Initial App</div>
    </Fragment>
  );
};
