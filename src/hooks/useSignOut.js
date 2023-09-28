import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../api/auth';
import { SIGNOUT } from '../redux/actions/types';

export const useSignOut = () => {
  const dispatch = useDispatch();
  const call = () => {
    setCurrentUser();
    dispatch({
      type: SIGNOUT,
    });
  };
  return call;
};
