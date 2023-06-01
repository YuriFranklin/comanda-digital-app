import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {Registry, container} from '../@core/infra/Container';
import AuthController from '../@core/presentation/controllers/AuthController';

const defaultState = {
  isSigned: false,
  userName: '',
};

interface AuthContextData {
  isSigned: boolean;
  userName: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [authProps, setAuthProps] = useState(defaultState);
  const authController = container.get<AuthController>(Registry.AuthController);

  const providerValueWrap: AuthContextData = useMemo(
    () => ({isSigned: authProps.isSigned, userName: authProps.userName}),
    [authProps],
  );

  useEffect(() => {
    const callback = ({
      userName,
      signed,
    }: {
      userName: string | undefined;
      signed: boolean;
    }) => {
      setAuthProps({isSigned: signed, userName: userName || ''});
    };

    authController.subscribe(callback);

    return authController.unsubscribe(callback);
  }, [authController]);

  return (
    <AuthContext.Provider value={providerValueWrap}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthProvider, AuthContext};
