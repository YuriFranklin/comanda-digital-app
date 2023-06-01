import React from 'react';
import Routes from './routes';
import RootProvider from './context';

function App(): JSX.Element {
  return (
    <RootProvider>
      <Routes />
    </RootProvider>
  );
}

export default App;
