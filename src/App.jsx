import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(0);
	const name_4 = 'Vite';
	return (
		<div className="App terst">
			<h1>{`${name_4} + React`}</h1>
			<div className="card">
				<button onClick={() => setCount(count => count + 1)}> {count}</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				`Click on the ${name_4} and React logos to learn more`
			</p>
		</div>
	);
}

export default App;
