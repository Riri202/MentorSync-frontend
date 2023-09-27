/* eslint-disable max-len */
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Edit, Email, Place } from '@mui/icons-material';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Alert, CircularProgress } from '@mui/material';
import BannerImage from '../../../assets/images/profile-banner.jpg';
import SectionCard from './SectionCard';
import { MENTOR_ROLE } from '../../../utils/constants';
import { useCurrentUser } from '../../../hooks/useCurrentUser';

function Info({ loading, errorText, profile }) {
  const { userId } = useParams();
  const { pathname } = useLocation();
  const currentUser = useCurrentUser();
  return (
    <SectionCard img={BannerImage}>
      {
        loading ? <CircularProgress /> : (
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <>
            {errorText ? (
              <Alert severity="error">
                {errorText}
              </Alert>
            ) : (
              <>
                {currentUser && currentUser.id === profile?._id && (
                <div className="w-full flex justify-end text-gray-500">
                  <Edit color="inherit" />
                </div>
                )}
                <div className="flex flex-col md:flex-row">
                  <CardContent className="md:w-[70%] px-0">
                    <p className="font-semibold text-2xl">
                      {`${profile?.firstname} ${profile?.lastname} | ${profile?.occupation}`}
                    </p>
                    <p className="font-light text-gray-500">
                      {profile?.bio}
                    </p>
                  </CardContent>
                  <CardContent className="flex flex-col space-y-3">
                    <div className="p-2 flex flex-row space-x-4 items-center rounded-lg border text-[#1776D1] border-[rgba(54,132,206,0.34)] bg-[rgba(23,119,209,0.2)]">
                      <Email color="inherit" fontSize="small" />
                      <p className="text-sm lg:text-base">{profile?.email}</p>

                    </div>
                    <div className="p-2 flex flex-row space-x-4 whitespace-nowrap items-center rounded-lg border text-[#1776D1] border-[rgba(54,132,206,0.34)] bg-[rgba(23,119,209,0.2)]">
                      <Place color="inherit" fontSize="small" />
                      <p className="text-sm lg:text-base">Lexington, California</p>

                    </div>
                  </CardContent>
                </div>
                {profile?.role === MENTOR_ROLE && (
                <CardContent>
                  {currentUser ? (
                    <>
                      {currentUser.id !== profile?._id && (
                        <Button href={`/mentors/${userId}/session`} variant="contained">Request Session</Button>
                      )}
                    </>
                  ) : (
                    <Link to="/signin" state={{ redirectTo: pathname }}>
                      <Button sx={{ fontSize: { xs: 10, sm: 12 } }} className="italic w-full md:w-auto" variant="contained">login to request session</Button>
                    </Link>
                  ) }
                  {currentUser && currentUser.role === MENTOR_ROLE && currentUser.id === profile?._id && <Button href={`/mentors/${userId}/availability`} variant="contained">Edit your schedule</Button>}
                </CardContent>
                )}

              </>
            )}
          </>
        )
      }

    </SectionCard>

  );
}

export default Info;
