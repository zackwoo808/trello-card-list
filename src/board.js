import BoardFooter from './boardFooter';
import BoardTitle from './boardTitle';
import CardList from './cardList.js';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Board = ({ name, cards }) => (
	<td>
		<div className="board">
			<div className="outer-border">
				<div className="inner-border">
					<BoardTitle name={name} />
					<CardList cards={cards} />
					<BoardFooter />
				</div>
			</div>
		</div>
	</td>
);

export default Board;