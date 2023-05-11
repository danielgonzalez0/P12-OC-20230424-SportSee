import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FetchData from '../customHook/FetchData';
import UserSessionsFactory from '../../factories/UserSessionsFactory';
import variables from '../../styles/_settings.scss';
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';
import Loader from '../loader/Loader';

/**
 * React component given the structure HTML of the chart with sessions informations
 * @param {PropTypes} userId id of the user connected
 * @returns {React.ReactElement} TimeSessionsChart
 */
const TimeSessionsChart = ({ userId }) => {
  // const url = '/mockedDatas/sessionsDuration.json';
  const url = `http://localhost:3000/user/${userId}/average-sessions`;

  const [dataArray, setDataArray] = useState([]);

  const [data, isLoading, isError, error] = FetchData(
    url,
    1500,
    UserSessionsFactory,
    'api'
  );

  /**
   * recharts tooltip which render the active value of the chart by html nodes
   * https://recharts.org/en-US/api/Tooltip
   * @param {Boolean} active If set true, the tooltip is displayed. If set false, the tooltip is hidden
   * @param {object} payload array of the content to be displayed in the tooltip
   */
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p>{payload[0].value} min</p>
        </div>
      );
    }
  };

  CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
  };

  /**
   * customize the legend of the graph
   * @returns customized legend components
   */
  const CustomLegend = () => {
    return (
      <div className="graph-legend">
        <p>Durée moyenne des</p>
        <p>sessions</p>
      </div>
    );
  };

  /**
   * customize css of the chart based on x coordinate of the mouse
   * @param {object} e mouseEvent
   */
  const customLineChart = (e) => {
    const div = document.getElementsByClassName('filter')[0];
    if (e.isTooltipActive) {
      const activeDotX = e.activeCoordinate.x;
      const graphContainerWidth = div.clientWidth;
      const ratio = Math.round((activeDotX / graphContainerWidth) * 100);
      let gradientPercentage;
      if (ratio === 2) {
        gradientPercentage = 0;
      } else if (ratio === 96) {
        gradientPercentage = 100;
      } else {
        gradientPercentage = ratio;
      }
      div.style.background = `linear-gradient(90deg, rgba(0,0,0,0) ${gradientPercentage}%, rgba(210,0,0,1) ${gradientPercentage}%)`;
    } else {
      div.style.background = '';
    }
  };

  /**
   * customize the X axis of the chart
   * @param {number} x value of the x-axis of the tick
   * @param {number} y value of the y-axis of the tick
   * @param {object} payload array of the content to be displayed in the Xaxis
   * @returns customized axis components
   */
  const renderCustomAxisTick = ({ x, y, payload }) => {
    switch (payload.value) {
      case 1:
        x = 10;
        payload.value = 'L';
        break;
      case 2:
        payload.value = 'M';
        break;
      case 3:
        payload.value = 'M';
        break;
      case 4:
        payload.value = 'J';
        break;
      case 5:
        payload.value = 'V';
        break;
      case 6:
        payload.value = 'S';
        break;
      case 7:
        // x = 240;
        payload.value = 'D';
        break;
      default:
        console.log('no match for Xaxis');
    }
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={'-5'}
          dy={12}
          fontSize={12}
          textAnchor="middle"
          fill="rgba(255,255,255,0.5)"
        >
          {payload.value}
        </text>
      </g>
    );
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
    <div className="timeSessionsChart-container">
      <ResponsiveContainer width="100%" height="100%" className="filter">
        <LineChart
          data={dataArray}
          margin={{ top: 5, right: 10, left: 5, bottom: 5 }}
          onMouseMove={(e) => customLineChart(e)}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
              <stop
                offset="20%"
                stopColor={variables.white1}
                stopOpacity={0.4}
              />
              <stop
                offset="100%"
                stopColor={variables.white1}
                stopOpacity={1}
              />
            </linearGradient>
          </defs>
          <Legend content={<CustomLegend />} align="left" verticalAlign="top" />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#colorUv)"
            isAnimationActive={true}
            animationEasing="ease-in-out"
            animationDuration={2000}
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: 'rgba(255, 255, 255, 0.2)',
              strokeWidth: 10,
              r: 5,
              fill: 'white',
            }}
          />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={renderCustomAxisTick}
          />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outline: 'none' }}
            cursor={false}
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
