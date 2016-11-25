import React from 'react';
import InputComponent from './InputComponent';

export default class App extends React.Component {
	onButtonClick() {
		console.log('Button was clicked!');
	}

	render() {
		return (
			<div id="content">
				<h2>React props and states example</h2>
				<InputComponent onButtonClick={this.onButtonClick} buttonValue="Click me!" />
			</div>
		);
	}
}
