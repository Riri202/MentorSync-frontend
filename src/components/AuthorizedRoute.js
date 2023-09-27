import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useCurrentUser } from '../hooks/useCurrentUser';

function AuthorizedRoute({ permittedRole }) {
  const currentUser = useCurrentUser();
  const location = useLocation();

  return (
    currentUser && (
      <>
        {currentUser.role === permittedRole ? (
          <Outlet />
        ) : (
          <Navigate to="/unauthorized" state={{ from: location }} replace />
        )}
      </>
    )
  );
}

export default AuthorizedRoute;
