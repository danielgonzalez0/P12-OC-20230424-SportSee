import React from 'react';
import caloriesIcon from './calories-icon.png';
import proteinIcon from './protein-icon.png';
import glucidIcon from './carbs-icon.png';
import lipidIcon from './fat-icon.png';
import PropTypes from 'prop-types';


/**
 * React component given the structure HTML of the image carousel
 * @param {PropTypes} userId id of the user connected 
 * @returns {React.ReactElement} InfosCard
 */
const InfosCard = ({ calorie, protein, glucid, lipid }) => {
  return (
      <aside>
        <div className="aside-container" id="caloriesInfos">
          <img src={caloriesIcon} alt="calories-icon" />
          <h4>{calorie.toLocaleString('en-US')}kCal</h4>
          <p>Calories</p>
        </div>
        <div className="aside-container" id="ProteinesInfos">
          <img src={proteinIcon} alt="proteines-icon" />
          <h4>{protein.toLocaleString('en-US')}g</h4>
          <p>Proteines</p>
        </div>
        <div className="aside-container" id="glucidsInfos">
          <img src={glucidIcon} alt="glucids-icon" />
          <h4>{glucid.toLocaleString('en-US')}g</h4>
          <p>Glucides</p>
        </div>
        <div className="aside-container" id="lipidsInfos">
          <img src={lipidIcon} alt="lipids-icon" />
          <h4>{lipid.toLocaleString('en-US')}g</h4>
          <p>Lipides</p>
        </div>
      </aside>
  );
};

InfosCard.propTypes = {
  userId: PropTypes.number,
};

export default InfosCard;
