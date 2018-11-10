import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

const BoardTitle = ({ name }) => (
	<div className="title-container">
	   <span className="title">{name}</span>
	   <span className="dots">...</span>
	</div>
);

export default BoardTitle;