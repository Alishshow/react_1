import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class App extends Component {
  render() {
    return(
          <div className="wrapper"> 
            <SayFullName name="Alisher" surname="Sarsekeyev" link="https://linkedin.com/in/alishshow"/>
            <SayFullName name="Huskar" surname="Warrior" link="https://linkedin.com/in/alishshow"/>
            <SayFullName name="Nessaj" surname="Knight" link="https://linkedin.com/in/alishshow"/>
          </div>
    )
  }
}

function SayFullName(props) {
  return (
      <div>
      <h1>Моё имя {props.name}, фамилия - {props.surname}</h1>
      <a href={props.link}>Ссылка на мой профиль</a>
      </div>
  )
}


export default App;
