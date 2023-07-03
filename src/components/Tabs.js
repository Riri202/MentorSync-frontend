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
    <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: 2 }}>
      <Tabs value={currentTab} onChange={handleTabChange} aria-label="basic tabs example">
        {tabs.map((tab, index) => (
          <Tab label={tab} {...a11yProps(index)} />
        ))}
      </Tabs>
    </Box>
  );
}
