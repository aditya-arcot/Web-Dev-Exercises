import React from 'react';

function Greet() {
	return <h1>Hello!</h1>
}

function Dog() {
	return <p>Woof</p>
}

function App() {
	return (
		<div style={{ textAlign: 'center' }}>
			<Greet />
			<Dog />
		</div>
	);
}

export default App;
