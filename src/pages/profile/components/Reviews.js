import { useState } from 'react';
import BasicTabs from '../../../components/Tabs';
import SectionCard from './SectionCard';
import Review from './Review';
import TabPanel from '../../../components/TabPanel';
import SessionReview from './SessionReview';
import { USER_ROLE } from '../../../utils/constants';
// to be able to review a session, session must be accepted and current time must be greater than/later than the session's time.
function Reviews({ currentUser }) {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newTab) => {
    setCurrentTab(newTab);
  };

  return (
    <SectionCard>
      <p className="font-light text-gray-500 mb-2">
        Bio This will allow you to bring Twilio’s public or private network connectivity closer to your
        applications for improved performance.
      </p>
      {currentUser && currentUser.role === USER_ROLE && <SessionReview />}
      <div className="w-full mt-4">
        <BasicTabs currentTab={currentTab} handleTabChange={handleTabChange} tabs={["Received", "Given"]} />
        <TabPanel value={currentTab} index={0}>
          <div className="flex flex-col space-y-3">
            <Review />
            <Review />
            <Review />
            <Review />
          </div>
        </TabPanel>
        <TabPanel value={currentTab} index={1}>
          <div className="flex flex-col space-y-3">

            <Review received={false} />
            <Review received={false} />
            <Review received={false} />
            <Review received={false} />
            <Review received={false} />
          </div>
        </TabPanel>
      </div>
    </SectionCard>
  );
}

export default Reviews;
