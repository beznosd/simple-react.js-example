import React, { Component } from 'react';

export default class InputComponent extends Component {
	constructor(props) {
    	super(props);

		this.state = {
			inputValue: ''
		};

		this.onChangeInput = this.onChangeInput.bind(this);
	}

	onChangeInput(evt) {
		this.setState({ inputValue: evt.target.value });
	}

	render() {
		return (
			<div>
				{/* State example  */}

				<h3>States</h3>
				<input 
					onChange={this.onChangeInput} 
					value={this.state.inputValue} 
					type="text" 
					placeholder="type something" 
				/>

				<p>{this.state.inputValue}</p>
				

				{/* Props example  */}

				<h3>Props</h3>
				<button onClick={this.props.onButtonClick}>
					{this.props.buttonValue}
				</button>
				<p>Open the conosle to see the results</p>
			</div>
		);
	}
}