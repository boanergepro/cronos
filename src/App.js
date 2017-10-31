//Dependencies
import React, { Component } from 'react';
import './App.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

//Components
import Time from './components/Time/Time';

//Components botones
import Start from './components/botonStart/Start';
import Stop from './components/botonStop/Stop';
import Restart from './components/botonRestart/Restart';
import Add from './components/botonAdd/Add';
import Refresh from './components/botonRefresh/Refresh';
//Component - Header
import Header from './components/Header/Header';
//Caja List
import List from './components/List/List';

class App extends Component {

  constructor(){
    super();
    //Variables
    this.min = 0;
    this.seg = 0;
    this.intervalMinutos = 0;
    this.intervalSegundos = 0;
    this.elementLi = ". . .";
    this.saltoLinea = ". .";
    //Verifica si el cronometro esta iniciado o no.
    this.bandera = false;

    this.state = {

      minutos: 0,
      segundos: 0,
      items: []
    }
    //Bindeando las funciones fuera de constructor() {}
    this.time = this.time.bind(this);
    this.changeMin = this.changeMin.bind(this);
    this.changeSeg = this.changeSeg.bind(this);
    this.clearTime = this.clearTime.bind(this);
    this.restar = this.restar.bind(this);
    this.add = this.add.bind(this);
    this.borrar = this.borrar.bind(this);
    

    injectTapEventPlugin();
  }
  //Funciones
  changeMin(){
    //setState sirve para modificar los valores del state inicial.
    this.setState({

      minutos: this.min += 1
      
    });
  }
  changeSeg(){
    //setState sirve para modificar los valores del state inicial.
    this.setState({

       segundos: this.seg += 1
    });
   if(this.seg === 60){

      this.seg = 0 ;  
    }
  }
  time(){
    if (this.bandera === false){
      this.intervalSegundos = setInterval( this.changeSeg , 1000);
      this.intervalMinutos = setInterval( this.changeMin , 60000);
      console.log("Ejecucion de time");
      this.bandera = true;
    }
  }
  clearTime(){
    if (this.bandera === true){
      clearInterval(this.intervalMinutos);
      clearInterval(this.intervalSegundos);
      this.bandera = false;
    } 
  }
  restar(){
    this.min = 0;
    this.seg = 0;
    this.setState({
        minutos : 0,
        segundos: 0
    });
    clearInterval(this.intervalMinutos);
    clearInterval(this.intervalSegundos);
    this.bandera = false;
  }
  add(){

    this.setState({
      items : this.state.items.concat([{
        minutos: this.state.minutos,
        segundos: this.state.segundos
      }])
    });

  }
  borrar(){
    this.setState({
      items : []
    });
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        
        <div className="App">

          <Header />
          <Time minutos={ this.state.minutos } segundos={ this.state.segundos }/>
        
          <div className="Botones">
          <Start funct={ this.time } />
          <Stop funct={ this.clearTime } />
          <Restart funct={ this.restar } />
          <Add funct={this.add}/>
          </div>
  
            
          <List items={this.state.items}/>
         
          <Refresh funct={ this.borrar }/>

        </div>

      </MuiThemeProvider>

    );
  }
}
export default App;