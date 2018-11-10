import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

const CardListItem = ({ card }) => (
	<div className="card">
	  <div className="card-container">
	    <p>{card.text}</p> 
	  </div>
	</div>
);

export default CardListItem;