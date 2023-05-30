import React, {createContext, useState, useCallback} from 'react';
import Toasts from '../components/organisms/Toasts';
import uuid from 'react-native-uuid';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info' | 'warn';
  text: string;
  buttonTitle?: string;
  onClick?: () => void;
}

interface ToastShow {
  (message: Omit<ToastMessage, 'id'>): string;
}

interface ToastHide {
  (id: string): void;
}

interface ToastContext {
  addToast: ToastShow;
  removeToast: ToastHide;
}

const ToastContext = createContext<ToastContext | null>(null);

const ToastProvider = ({children}: {children: React.ReactNode}) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(message => message.id !== id));
  }, []);

  const addToast = useCallback<ToastShow>(message => {
    const id = uuid.v4() as string;

    setMessages(state => [...state, {...message, id}]);

    return id;
  }, []);

  return (
    <ToastContext.Provider value={{addToast, removeToast}}>
      <Toasts messages={messages} />
      {children}
    </ToastContext.Provider>
  );
};

export {ToastProvider, ToastContext};
