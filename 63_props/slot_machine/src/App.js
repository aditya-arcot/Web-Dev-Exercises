import React from 'react'
import Slots from './Slots';

function App() {
	return (
		<div style={{ textAlign: 'center' }}>
			<Slots val1="🍒" val2="🍒" val3="🍌" />
			<Slots val1="z" val2="z" val3="z" />
		</div>
	);
}

export default App;
