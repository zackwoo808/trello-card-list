import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Board = ({ name, cards }) => (
	<div className="board">
		<div className="outer-border">
			<div className="inner-border">
				<BoardTitle name={name} />
				<CardList cards={cards} />
				<BoardFooter />
			</div>
		</div>
	</div>
);

const BoardFooter = () => (
	<div className="footer-container">
		Add a card...
	</div>
);

const BoardTitle = ({ name }) => (
	<div className="title-container">
	   <span className="title">{name}</span>
	   <span className="dots">...</span>
	</div>
);

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

const CardListItem = ({ card }) => (
	<div className="card">
	  <div className="card-container">
	    <p>{card.text}</p> 
	  </div>
	</div>
);

// data

const Boards = [
	{
		name: "Phone Features",
		cards: [
			{
				text: "Subwoofer"
			},
			{
				text: "Non-porous, washable"
			},
			{
				text: "Wings"
			},
			{
				text: "Beveled Bezel"
			},
			{
				text: "Bezeled Bevel"
			},
			{
				text: "Seedless"
			}
		]
	}
]

ReactDOM.render(
	<Board
		name={Boards[0].name}
		cards={Boards[0].cards}
	/>
	, document.getElementById('root')
);
