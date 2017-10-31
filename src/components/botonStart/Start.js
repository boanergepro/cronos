import React, { Component } from 'react';
import './styleStart.css';
import icon from './play.svg'

class Start extends Component {
	render() {
		return (

			<button className="Start" onClick={ this.props.funct }>

				<img src={icon} className="IconStart" alt="Start" />

			</button>

		);
	}
}
export default Start