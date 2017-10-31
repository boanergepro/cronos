import React, { Component } from 'react';
import './styleRefresh.css';
import icon from './error.svg';

class Refresh extends Component {
	render() {
		return (

			<button onClick={ this.props.funct } className="Refresh">

					<img src={icon} alt="Borrar" />


			</button>

		);
	}
}
export default Refresh