import React from 'react';
import { render } from 'react-dom';

import '../stylesheets/main.scss';
import AppWrapper from './AppWrapper';
import MachinePage from './MachinePage';

const machineData = {
  averageCycleTime: 45, // in seconds
  machine: {
    id: 29012,
    name: 'Haas #1',
  },
  partCount: 1002, // count value
  partsByHour: [
    { label: '01:00 AM', value: 91 },
    { label: '02:00 AM', value: 78 },
    { label: '03:00 AM', value: 58 },
    { label: '04:00 AM', value: 0 },
    { label: '05:00 AM', value: 0 },
    { label: '06:00 AM', value: 89 },
    { label: '07:00 AM', value: 93 },
    { label: '08:00 AM', value: 104 },
    { label: '09:00 AM', value: 74 },
    { label: '10:00 AM', value: 68 },
    { label: '11:00 AM', value: 88 },
    { label: '12:00 PM', value: 43 },
    { label: '01:00 PM', value: 67 },
    { label: '02:00 PM', value: 128 },
    { label: '03:00 PM', value: 21 },
  ],
  productionTime: 12.43, // in hours
  scrapCount: 74, // count value
  scrapPercentage: .0739, // % out of 1.0
  utilization: .869, // % out of 1.0
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AppWrapper>
          <MachinePage
            averageCycleTime={machineData.averageCycleTime}
            machine={machineData.machine}
            partCount={machineData.partCount}
            partsByHour={machineData.partsByHour}
            productionTime={machineData.productionTime}
            scrapCount={machineData.scrapCount}
            scrapPercentage={machineData.scrapPercentage}
            utilization={machineData.utilization}
          />
        </AppWrapper>
      </div>
    );
  }
}

render((
  <App />
), document.getElementById('content'))
