import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FetchData from '../customHook/FetchData';
import { UserSessionsFactory } from '../../factories/UserSessionsFactory';
import variables from '../../styles/_settings.scss';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Text,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

/**
 * React component given the structure HTML of the chart with sessions informations
 * @param {PropTypes} userId id of the user connected
 * @returns {React.ReactElement} TimeSessionsChart
 */
const TimeSessionsChart = ({ userId }) => {
  const url = '/mockedDatas/sessionsDuration.json';
  const [dataArray, setDataArray] = useState([]);

  const [data, isLoading, isError, error] = FetchData(
    url,
    1000,
    UserSessionsFactory,
    'api'
  );

  /**
   * recharts tooltip which render the active value of the chart by html nodes
   * https://recharts.org/en-US/api/Tooltip
   * @param {Boolean} active If set true, the tooltip is displayed. If set false, the tooltip is hidden
   * @param {object} payload array of the content to be displayed in the tooltip
   * @param {string} label label value which is active
   */
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p>{payload[0].value} min</p>
        </div>
      );
    }
  };

  /**
   * customize the legend of the graph
   * @returns customized legend components
   */
  function CustomLegend() {
    return (
      <div className="graph-legend">
        <p>Durée moyenne des</p>
        <p>sessions</p>
      </div>
    );
  }

  useEffect(() => {
    if (!isNaN(userId) && data) {
      setDataArray(data.sessions);
      console.log(dataArray);
    }
  }, [userId, data]);

  if (isLoading) return <p>Données en cours de chargement</p>;

  if (isError)
    return (
      <div className="error-container">
        <p>{error.name}</p>
        <p>{error.message}</p>
      </div>
    );

  return (
    <div className="timeSessionsChart-container">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={dataArray}
          margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
        >
          <Legend content={<CustomLegend />} align="left" verticalAlign="top" />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke={variables.white1}
            strokeWidth={2}
            dot={false}
          />
          {/* <CartesianGrid stroke={variables.red2} /> */}
          <XAxis
            dataKey="day"
            stroke="rgba(255,255,255,0.5)"
            tickLine={false}
            axisLine={false}
            // padding={{ left: 5 }}
            
          />
          {/* <YAxis /> */}
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outline: 'none' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

TimeSessionsChart.propTypes = {
  userId: PropTypes.number,
};

export default TimeSessionsChart;
