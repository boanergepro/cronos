import React, { Component } from 'react';
import './styleAdd.css';
import icon from './plus.svg';

class Add extends Component{
	render(){
		return(

			<button className="Add" onClick={ this.props.funct }>

				<img src={icon} className="IconAdd" alt="Add" />

			</button>

		);
	}
}
export default Add;