import React, { Component } from 'react';
import './styleList.css';

class List extends Component{

	render(){
		return(

			<div>
				<ul className="List" id="parent">
					<li>Tiempos</li>

					{this.props.items.map((valor) => {
						return(<li> { `Tiempo => ${valor.minutos} : ${valor.segundos}` } </li>
					)})}
				</ul>
			</div>

		);
	}
}
export default List;
