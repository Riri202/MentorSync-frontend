import { useState } from 'react';
import BasicTabs from '../../../components/Tabs';
import SectionCard from './SectionCard';
import Review from './Review';

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      className="p-3"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        children
      )}
    </div>
  );
}

function Reviews() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newTab) => {
    setCurrentTab(newTab);
  };

  return (
    <SectionCard>
      <p className="font-semibold text-2xl">
        Reviews
      </p>
      <p className="font-light text-gray-500">
        Bio This will allow you to bring Twilio’s public or private network connectivity closer to your
        applications for improved performance.
      </p>
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
