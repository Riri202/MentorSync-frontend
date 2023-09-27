import { useSelector } from 'react-redux';

export const useCurrentUser = () => useSelector((state) => state.auth?.user);
