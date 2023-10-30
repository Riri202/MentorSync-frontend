import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser, signup } from '../api/auth';
import { SIGNUP_SUCCESS } from '../redux/actions/types';

export const useSignUp = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const call = async (body) => {
    try {
      setLoading(true);
      const data = await signup(body);
      if (data) {
        setCurrentUser(data);
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: { user: data },
        });
        setLoading(false);
      } else {
        return { data };
      }
      return {};
    } catch (error) {
      setLoading(false);
      console.log(error);
      return { error: error.response?.data?.message || error.message };
    }
  };
  return [call, loading];
};
