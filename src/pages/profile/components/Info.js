/* eslint-disable max-len */
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Email, Place } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import BannerImage from '../../../assets/images/profile-banner.jpg';
import SectionCard from './SectionCard';

function Info() {
  const params = useParams();
  return (
    <SectionCard img={BannerImage}>
      <div className="flex flex-row">
        <CardContent className="w-[80%]">
          <p className="font-semibold text-2xl">
            Name | Occupation
          </p>
          <p className="font-light text-gray-500">
            Bio This will allow you to bring Twilio’s public or private network connectivity closer to your
            applications for improved performance.
          </p>
        </CardContent>
        <CardContent className="flex flex-col space-y-3">
          <div className="p-2 flex flex-row space-x-4 items-center rounded-lg border text-[#1776D1] border-[rgba(54,132,206,0.34)] bg-[rgba(23,119,209,0.2)]">
            <Email color="inherit" fontSize="small" />
            <p>rmoladokunfdjnjn@yahoo.com</p>

          </div>
          <div className="p-2 flex flex-row space-x-4 items-center rounded-lg border text-[#1776D1] border-[rgba(54,132,206,0.34)] bg-[rgba(23,119,209,0.2)]">
            <Place color="inherit" fontSize="small" />
            <p>Lexington, California</p>

          </div>
        </CardContent>
      </div>
      <CardActions className="px-10">
        <Button href={`/mentors/${params.mentorId}/session`} variant="contained">Request Session</Button>
      </CardActions>
    </SectionCard>

  );
}

export default Info;
