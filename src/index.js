import Board from './board.js';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const BoardList = ({ boards }) => (
	<table className="board-list">
		<tbody>
			{boards.map(board => (
				<Board
					key={board.id}
					name={board.name}
					cards={board.cards}
				/>
			))}
		</tbody>
	</table>
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
	},
	{
		name: "Reasons React is Cool",
		cards: [
			{
				text: "I really want to do it."
			},
			{
				text: "A lot of opportunities for it."
			},
			{
				text: "Web dev is pretty sick."
			}
		]
	},
]

ReactDOM.render(
	<BoardList
		boards={Boards}
	/>
	, document.getElementById('root')
);
