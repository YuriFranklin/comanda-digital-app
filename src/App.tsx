import React from 'react';
import Routes from './routes';
import {ToastProvider} from './context/toast';

function App(): JSX.Element {
  return (
    <ToastProvider>
      <Routes />
    </ToastProvider>
  );
}

export default App;
