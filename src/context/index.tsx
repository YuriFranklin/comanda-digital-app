import React, {PropsWithChildren} from 'react';
import {AuthProvider} from './auth';
import {ToastProvider} from './toast';

const RootProvider: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <ToastProvider>
      <AuthProvider>{children}</AuthProvider>
    </ToastProvider>
  );
};

export default RootProvider;
