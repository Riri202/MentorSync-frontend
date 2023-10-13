import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
// import { useCurrentUser } from '../hooks/useCurrentUser';

function Unauthorized() {
  // const user = useCurrentUser();
  const navigate = useNavigate();

  // if (!user) return (navigate('/'));

  return (
    <div className="h-screen flex flex-row justify-center items-center">
      <div className=" flex flex-col space-y-2 justify-center text-center">
        <div className="flex flex-col space-y-3 md:space-y-6">
          <p className="text-4xl font-bold">401: Unauthorized</p>
          <p className="text-2xl font-semibold">
            Ooops! Looks like you are not authorized to access this page.
          </p>
        </div>
        <Button size="large" variant="text" startIcon={<ArrowBack />} onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    </div>
  );
}

export default Unauthorized;
