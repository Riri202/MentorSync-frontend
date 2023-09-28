import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useCurrentUser } from '../hooks/useCurrentUser';

function AuthenticatedRute({ permittedRole }) {
  const currentUser = useCurrentUser();
  const location = useLocation();

  return (
    <>
      {currentUser.role === permittedRole ? (
        <Outlet />
      ) : (
        <Navigate to="/unauthorized" state={{ from: location }} replace />
      )}
    </>
  );
}

export default AuthenticatedRute;
