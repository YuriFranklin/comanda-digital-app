import React, {useMemo} from 'react';
import {ToastMessage} from '../../../context/toast';
import {Container} from './styles';
import Toast from '../../molecules/Toast';

interface ToastsProps {
  messages: ToastMessage[];
}

const Toasts: React.FC<ToastsProps> = ({messages}) => {
  const MAXIMUM_TOASTS_ON_SCREEN = 1;

  const visibleMessages = useMemo(() => {
    if (messages.length > MAXIMUM_TOASTS_ON_SCREEN) {
      return messages.slice(
        messages.length - MAXIMUM_TOASTS_ON_SCREEN,
        messages.length,
      );
    }
    return messages;
  }, [messages]);

  return (
    <Container>
      {visibleMessages.map(visibleMessage => (
        <Toast message={visibleMessage} key={visibleMessage.id} />
      ))}
    </Container>
  );
};

export default Toasts;
