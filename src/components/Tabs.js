import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ tabs, currentTab, handleTabChange }) {
  return (
    <Box className="regular-font" sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: 2 }}>
      <Tabs
        variant="scrollable"
        value={currentTab}
        onChange={handleTabChange}
        aria-label="basic tabs example"
        // scrollButtons
        allowScrollButtonsMobile
      >
        {tabs.map((tab, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Tab key={index} label={tab} {...a11yProps(index)} />
        ))}
      </Tabs>
    </Box>
  );
}
