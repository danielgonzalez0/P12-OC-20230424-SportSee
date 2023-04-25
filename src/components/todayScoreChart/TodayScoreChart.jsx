import React, { useEffect, useState } from 'react';
import { Cell, Label, Pie, PieChart, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import variables from '../../styles/_settings.scss';

/**
 * React component given the structure HTML of the chart performance
 * @param {PropTypes} score user score of achievement for the day
 * @returns {React.ReactElement} TodayScoreChart
 */
const TodayScoreChart = ({ score }) => {
  const [dataArray, setDataArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const COLORS = [`${variables.red1}`, `${variables.white2}`];

  /**
   * create JSX element with all the customized labels for the pie chart
   * @returns
   */
  const CustomLabel = ({ viewBox, title, label1, label2, value }) => {
    const { cx, cy } = viewBox;
    return (
      <g>
        <text
          x={cx - 75}
          y={cy - 100}
          textAnchor="middle"
          dominantBaseline="central"
          alignmentBaseline="middle"
          fontFamily={variables.font500}
          fontSize="15px"
          fill={variables.black3}
          fontWeight="500"
        >
          {title}
        </text>
        <text
          x={cx}
          y={cy + 5}
          textAnchor="middle"
          dominantBaseline="central"
          alignmentBaseline="middle"
          fontFamily={variables.font500}
          fontSize="16px"
          fill={variables.grey1}
          fontWeight="500"
        >
          {label1}
        </text>
        <text
          x={cx}
          y={cy + 25}
          textAnchor="middle"
          dominantBaseline="central"
          alignmentBaseline="middle"
          fontFamily={variables.font500}
          fontSize="16px"
          fill={variables.grey1}
          fontWeight="500"
        >
          {label2}
        </text>
        <text
          x={cx}
          y={cy - 20}
          textAnchor="middle"
          dominantBaseline="central"
          alignmentBaseline="middle"
          fontFamily={variables.font700}
          fill={variables.black2}
          fontSize="26px"
          fontWeight="700"
        >
          {value}
        </text>
      </g>
    );
  };

  useEffect(() => {
    if (!isNaN(score)) {
      let chartData = [
        { name: 'todayScore', value: score * 100 },
        { name: 'remainingGoal', value: (1 - score) * 100 },
      ];
      setDataArray(chartData);
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, [score]);

  //JSX
  if (isLoading) return <p>En cours de chargement</p>;

  if (!isLoading)
    return (
      <div
        className="todayScoreChart-container"
        style={{
          width: '258px',
          height: '263px',
          backgroundColor: `${variables.white2}`,
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={dataArray}
              dataKey="value"
              innerRadius={0}
              outerRadius={85}
              isAnimationActive={false}
              fill={variables.white1}
            ></Pie>
            <Pie
              data={dataArray}
              dataKey="value"
              isAnimationActive={true}
              cx="50%"
              cy="50%"
              innerRadius={85}
              outerRadius={95}
              startAngle={90}
              endAngle={450}
              cornerRadius={10}
            >
              {dataArray.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  stroke="rgba(251,251,251)"
                />
              ))}
              <Label
                content={
                  <CustomLabel
                    title="Score"
                    label1="de votre"
                    label2="objectif"
                    value={`${score * 100}%`}
                  />
                }
                position="center"
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
};

TodayScoreChart.propTypes = {
  score: PropTypes.number,
};

export default TodayScoreChart;
