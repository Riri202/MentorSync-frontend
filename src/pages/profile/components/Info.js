/* eslint-disable max-len */
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Edit, Email, Place } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { Alert, CircularProgress } from '@mui/material';
import BannerImage from '../../../assets/images/profile-banner.jpg';
import SectionCard from './SectionCard';
import { MENTOR_ROLE, user } from '../../../utils/constants';

function Info({ loading, errorText, profile }) {
  const params = useParams();
  const { userId } = params;
  const currentUser = user;

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
                    <Button sx={{ fontSize: { xs: 10, sm: 12 } }} className="italic w-full md:w-auto" href="/signin" variant="contained">login to request session</Button>
                  ) }
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
