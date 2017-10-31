import React, { Component } from 'react';

//Material UI
import AppBar from 'material-ui/AppBar';

class Header extends Component {
	
	render(){
		return(

			<AppBar showMenuIconButton={false} title="Cronometro React Js" />

		);
	}
}
export default Header;
