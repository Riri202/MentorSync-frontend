/* eslint-disable import/prefer-default-export */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser, signin } from '../api/auth';
import { SIGNIN_SUCCESS } from '../redux/actions/types';

export const useSignIn = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const call = async (body) => {
    try {
      setLoading(true);
      const data = await signin(body);
      if (data) {
        setCurrentUser(data);
        dispatch({
          type: SIGNIN_SUCCESS,
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
