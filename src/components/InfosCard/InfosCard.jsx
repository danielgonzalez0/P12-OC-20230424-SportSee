import React from 'react';
import PropTypes from 'prop-types';


/**
 * React component given the structure HTML of the image carousel
 * @param {PropTypes} userId id of the user connected 
 * @returns {React.ReactElement} InfosCard
 */
const InfosCard = ({ userId }) => {
  return (
    <div>
      <h1>Infos user {userId}</h1>
    </div>
  );
};

InfosCard.propTypes = {
  userId: PropTypes.number,
};

export default InfosCard;
