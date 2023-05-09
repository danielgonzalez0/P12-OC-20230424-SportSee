import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { UserActivitiesFactory } from '../../factories/UserActivitiesFactory';
import FetchData from '../customHook/FetchData';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import variables from '../../styles/_settings.scss';
import Loader from '../loader/Loader';

/**
 * React component given the structure HTML of the chart activity
 * @param {PropTypes} userId id of the user connected
 * @returns {React.ReactElement} ActivityChart
 */
const ActivityChart = ({ userId }) => {
  const url = '/mockedDatas/activity.json';
  const [dataArray, setDataArray] = useState([]);

  const [data, isLoading, isError, error] = FetchData(
    url,
    1000,
    UserActivitiesFactory,
    'api'
  );
  /**
   * @param {string} tick value of the tick
   * @returns customized X-axis format
   */
  const formatXAxis = (tick) => {
    const date = new Date(tick);
    return date.getDate();
  };

  /**
   * customize the legend of the graph
   * @returns customized legend components
   */
  const CustomLegend = () => {
    return (
      <div className="graph-legend">
        <p>Activité quotidienne</p>
        <ul>
          <li>Poids (kg)</li>
          <li>Calories brûlées (kCal) </li>
        </ul>
      </div>
    );
  };

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
          <p>{payload[0].value}kg</p>
          <p>{payload[1].value}Kcal</p>
        </div>
      );
    }
  };

  useEffect(() => {
    if (!isNaN(userId) && data) {
      setDataArray(data.sessions);
    }
  }, [userId, data]);

  if (isLoading)
    return (
      <div className="loading-graph">
        <Loader />
        <p>Chargement</p>
      </div>
    );

  if (isError)
    return (
      <div className="error-container">
        <p>{error.name}</p>
        <p>{error.message}</p>
      </div>
    );

  return (
    <div className="activityChart-container">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={dataArray}
          margin={{
            top: 20,
            right: 40,
            left: 40,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="day"
            tickFormatter={(tick) => formatXAxis(tick)}
            tickLine={false}
            height={60}
            width={50}
            dy={20}
            fontFamily={variables.font500}
            fontSize={14}
            stroke={variables.grey2}
            axisLine={{ stroke: 'rgba(222,222,222,1)' }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            orientation="right"
            dx={20}
            fontFamily={variables.font500}
            fontSize={14}
            stroke={variables.grey2}
          />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outline: 'none' }}
            cursor={{ fill: 'rgba(196, 196, 196, 0.5)' }}
          />
          <Legend
            content={<CustomLegend />}
            align="right"
            verticalAlign="top"
          />
          <Bar
            dataKey="kilogram"
            fill={variables.black2}
            barSize={7}
            radius={[5, 5, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill={variables.red2}
            barSize={7}
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

ActivityChart.propTypes = {
  userId: PropTypes.number,
};

export default ActivityChart;
