import React from 'react';

import { Card, Calendar } from 'antd';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

const Dashboard = () => {
  return (
    <div>
      <Calendar onPanelChange={onPanelChange} />
    </div>
  );
};

export default Dashboard;
