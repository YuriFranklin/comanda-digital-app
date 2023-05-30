import React, {useCallback, useEffect, useState} from 'react';
import {ToastMessage} from '../../../context/toast';
import {Container, Text, Button} from './styles';
import useToast from '../../../hooks/useToast';
import {useSpring} from '@react-spring/native';

interface ToastProps {
  message: ToastMessage;
}

const Toast: React.FC<ToastProps> = ({message}) => {
  const TOAST_TIME_IN_MS: number = 2000;
  const [time, setTime] = useState(TOAST_TIME_IN_MS);
  const {removeToast} = useToast();

  const closeToast = useCallback(
    () => removeToast(message.id),
    [message, removeToast],
  );

  const [props] = useSpring(
    () => ({
      from: {opacity: 0, right: -50},
      to: {opacity: 1, right: 0},
      config: {tension: 180, friction: 12},
    }),
    [],
  );

  const [exitProps, exitApi] = useSpring(() => ({
    from: {opacity: 1, right: 0},
    to: {opacity: 0.1, right: -300},
    config: {duration: 2000},
    onResolve: () => {
      closeToast();
    },
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime(last => last - 100);
      } else {
        exitApi.start();
      }
    }, 100);

    return (): void => {
      clearInterval(timer);
    };
  }, [time, exitApi]);

  return (
    <Container style={[props, !time && exitProps]}>
      <Text>{message.text}</Text>
      {message.buttonTitle && (
        <Button
          onPress={() => {
            message.onClick && message.onClick();
            closeToast();
          }}>
          <Text style={{textAlignVertical: 'center'}}>
            {message.buttonTitle}
          </Text>
        </Button>
      )}
    </Container>
  );
};

export default Toast;
