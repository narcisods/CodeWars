import './App.css';
import { useState, useEffect } from 'react';
const endPoint = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

function App() {
	const [data, setData] = useState([]);

	const getData = (endPoint) => {
		fetch(endPoint)
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				setData(json.data);
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getData(endPoint);
	}, []);

	return (
		<div>
			<h1>Yugioh!</h1>
			<button>Duel!</button>
			<ul>
				{data.map((card) => (
					<li key={card.id}>{card.name}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
