import CardListItem from './cardListItem.js';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

const CardList = ({ cards }) => (
	<div className="card-list">
		<table>
		    <tbody>
		        {cards.map(card => (
		            <CardListItem key={card.id} card={card} />
		        ))}
		    </tbody>
		</table>
	</div>
);

CardList.propTypes = {
	cards: PropTypes.array
};

export default CardList;