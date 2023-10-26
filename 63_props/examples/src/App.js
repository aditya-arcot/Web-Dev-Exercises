import React from 'react'
// import Greeter from './Greeter'
// import Die from './Die'
// import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'
import Heading from './Heading'
import ColorList from './ColorList'

function App() {
	return (
		<div style={{ textAlign: 'center' }}>
			<Heading color='purple' text='welcome' fontSize='50px' />
			{/* <Greeter name="Rosa" from="Bob" /> */}
			{/* <Die numSides={10} />
      		<Die /> */}
			{/* <ListPicker vals={[0, 1, 2, 3, 4, 5]} />
      		<ListPicker vals={["a", "b", "c"]} /> */}
			<DoubleDice />
			<DoubleDice />
			<DoubleDice />
			<ColorList colors={['red', 'blue', 'green']} />
		</div>
	)
}

export default App