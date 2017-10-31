import React, { Component } from 'react';
import './styleTime.css';

class Time extends Component {
	
	render() {

		return (

			<div className="Cronos">
				
				<div className="Contenedor1">
				
					<div className="Pantalla">
						{this.props.minutos} : {this.props.segundos}
					</div>

				</div>

			</div>
			
		);
	}
}

export default Time;