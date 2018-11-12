import React from 'react';

import { Card, Calendar } from 'antd';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

const Dashboard = () => {
  return (
    <Card className="ctm-100-vh">
      <Calendar onPanelChange={onPanelChange} />
    </Card>
  );
};

export default Dashboard;
