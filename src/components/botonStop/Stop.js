import React, { Component } from 'react';
import './styleStop.css';
import icon from './pause-1.svg'

class Stop extends Component {
	render() {
		return (

			<button className="Stop" onClick={ this.props.funct }>

				<img src={icon} className="IconStop" alt="Stop" />

			</button>

		);
	}
}
export default Stop