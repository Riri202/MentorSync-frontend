/* eslint-disable max-len */
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import { Edit } from '@mui/icons-material';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Alert, CircularProgress } from '@mui/material';
import BannerImage from '../../../assets/images/profile-banner.jpg';
import SectionCard from './SectionCard';
import { MENTOR_ROLE, USER_ROLE } from '../../../utils/constants';
import { useCurrentUser } from '../../../hooks/useCurrentUser';
import Button from '../../../components/Button';

function Info({ loading, errorText, profile }) {
  const { userId } = useParams();
  const { pathname } = useLocation();
  const currentUser = useCurrentUser();
  const navigate = useNavigate();
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
                <div className="flex flex-col md:flex-row font-generalSansRegular">
                  <CardContent className="md:w-[70%] px-0">
                    <p className="text-lg lg:text-2xl flex items-start font-generalSansMedium">
                      {`${profile?.firstname} ${profile?.lastname} | ${profile?.occupation}`}
                      <span className="ml-2 text-sm text-blue-600 capitalize font-generalSansRegular">{profile?.role === MENTOR_ROLE ? profile?.role : 'Mentee'}</span>
                    </p>
                    <p className="text-gray-500">
                      {profile?.bio}
                    </p>
                  </CardContent>
                  {/* <CardContent className="flex flex-col space-y-3 text-blue-600">
                    <div className="p-2 flex flex-row space-x-4 items-center rounded-lg border  border-[rgba(54,132,206,0.34)] bg-[rgba(23,119,209,0.2)]">
                      <Email color="inherit" fontSize="small" />
                      <p className="text-sm lg:text-base">{profile?.email}</p>

                    </div>
                    <div className="p-2 flex flex-row space-x-4 whitespace-nowrap items-center rounded-lg border border-[rgba(54,132,206,0.34)] bg-[rgba(23,119,209,0.2)]">
                      <Place color="inherit" fontSize="small" />
                      <p className="text-sm lg:text-base">Lexington, California</p>

                    </div>
                  </CardContent> */}
                </div>
                {profile?.role === MENTOR_ROLE && (
                <CardContent>
                  {currentUser ? (
                    <>
                      {currentUser.id !== profile?._id && currentUser.role === USER_ROLE && (
                        <Button onClick={() => navigate(`/mentors/${userId}/session`)} btnText="Request Session" />
                      )}
                    </>
                  ) : (
                    <Link to="/signin" state={{ redirectTo: pathname }}>
                      <Button btnStyle="italic" btnText="login to request session" />
                    </Link>
                  ) }
                  {currentUser && currentUser.role === MENTOR_ROLE && currentUser.id === profile?._id && <Button onClick={() => navigate(`/mentors/${userId}/availability`)} variant="contained">Edit your schedule</Button>}
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
