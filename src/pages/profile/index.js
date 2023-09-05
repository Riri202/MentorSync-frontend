import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Info from './components/Info';
import Reviews from './components/Reviews';
import BasicTabs from '../../components/Tabs';
import TabPanel from '../../components/TabPanel';
import Sessions from './components/Sessions';
import { getUserDetails } from '../../api';
import { user } from '../../utils/constants';

const currentUser = user;

function Profile() {
  const params = useParams();
  const { userId } = params;
  const [currentTab, setCurrentTab] = useState(0);
  const [tabs, setTabs] = useState([]);
  const [profile, setProfile] = useState();
  const [errorText, setErrorText] = useState('');
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    setLoading(true);
    const response = await getUserDetails(userId);
    if (response?.error) {
      setErrorText(response?.error);
    } else {
      setProfile(response?.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    getUser();
  }, [userId]);

  useEffect(() => {
    if (currentUser && currentUser.id === profile?._id) {
      setTabs(["Sessions", "Reviews"]);
    } else {
      setTabs(["Reviews"]);
    }
  }, [currentUser, profile]);
  const handleTabChange = (event, newTab) => {
    setCurrentTab(newTab);
  };

  return (
    <div className="p-2 xs:p-6 md:p-16 xl:px-40 2xl:px-60  flex flex-col space-y-4 relative py-20 mt-11 bg-[#F3F2EE] min-h-screen">
      <Info loading={loading} errorText={errorText} profile={profile} />
      <BasicTabs currentTab={currentTab} handleTabChange={handleTabChange} tabs={tabs} />
      {currentUser && currentUser.id === profile?._id && (
      <TabPanel value={currentTab} index={0} className="p-0">
        <Sessions profile={profile} currentUser={currentUser} />
      </TabPanel>
      )}
      <TabPanel value={currentTab} index={currentUser && currentUser.id === profile?._id ? 1 : 0} className="p-0">
        <Reviews currentUser={currentUser} />
      </TabPanel>
      <p className="absolute bottom-10 pl-3 text-xs flex justify-center items-center font-light text-gray-500">
        <a href="https://www.freepik.com/free-vector/school-children-attending-distance-class-monitors-desks-classroom-screen-view_13146643.htm#page=2&query=online%20mentorship&position=27&from_view=search&track=ais">Banner image by pch.vector on Freepik</a>
      </p>
    </div>
  );
}

export default Profile;
