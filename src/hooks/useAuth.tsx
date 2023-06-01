import {useContext} from 'react';
import {AuthContext} from '../context/auth';

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('use must be used within a Provider');
  }

  return context;
};

export default useAuth;
