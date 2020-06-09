import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/MachinePage.scss';

import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const MachinePage = ({
  averageCycleTime,
  machine,
  partCount,
  partsByHour,
  productionTime,
  scrapCount,
  scrapPercentage,
  utilization,
}) => {

  const chartConfigs = {
    type: "column2d",
    width: "70%",
    height: "45%",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Parts by Hour",
        xAxisName: "Hour",
        yAxisName: "Number of Parts",
        theme: "fusion"
      },
      data: partsByHour
    }
  };

  return (
    <div className='app'>
      <div className="machineName">
          <h1>
            {machine.name}
          </h1>
      </div>
      <table className="machineInfoTable">
          <tbody>
            <tr>
              <td className="tableItem">
                <span>
                  <h3 className="colTitle">Part Count: </h3>
                  <p className="colContent">{partCount} parts</p>
                </span>
              </td>
            </tr>
            <tr>
              <td className="tableItem">
                <span>
                  <h3 className="colTitle">Scrap Count: </h3>
                  <p className="colContent">{scrapCount} scraps</p>
                </span>
              </td>
            </tr>
            <tr>
              <td className="tableItem">
                <span>
                  <h3 className="colTitle">Production Time: </h3>
                  <p className="colContent">{productionTime} hours</p>
                </span>
              </td>
            </tr>
            <tr>
              <td className="tableItem">
                <span>
                  <h3 className="colTitle">Scrap Percentage: </h3>
                  <p className="colContent">{scrapPercentage*100}%</p>
                </span>
              </td>
            </tr>
            <tr>
              <td className="tableItem">
                <span>
                  <h3 className="colTitle">Average Cycle Time: </h3>
                  <p className="colContent">{averageCycleTime} seconds</p>
                </span>
              </td>
            </tr>
            <tr>
              <td className="tableItem">
                <span>
                  <h3 className="colTitle">Utilization: </h3>
                  <p className="colContent">{utilization*100}%</p>
                </span>
              </td>
            </tr>
          </tbody>
      </table>
      <div className="graph">
        <ReactFC {...chartConfigs} />
      </div>
    </div>
  );
};

MachinePage.defaultProps = {};
MachinePage.propTypes = {
  averageCycleTime: PropTypes.number.isRequired,
  machine: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
  partCount: PropTypes.number.isRequired,
  partsByHour: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  })),
  productionTime: PropTypes.number.isRequired,
  scrapCount: PropTypes.number.isRequired,
  scrapPercentage: PropTypes.number.isRequired,
  utilization: PropTypes.number.isRequired,
};

export default MachinePage;
