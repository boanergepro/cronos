import React, { Component } from 'react';
import './styleRestart.css';
import icon from './stop-1.svg'
 
class Restart extends Component {
	render() {
		return(

			<button className="Restart" onClick={ this.props.funct }>

				 <img src={icon} className="IconRestar" alt="Restar" />

			</button>


		);

	}
}
export default Restart;