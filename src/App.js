import React from "react";
import './styles/index.css';

import Toggle from "./components/archive/Toggle";
import Clock from "./components/archive/Clock";
import ListUsers from "./components/ListUsers";
import Input from "./components/archive/Input";
import Calculator from "./components/Calculator";

class App extends React.Component {
  render() {
    return (
      <div className='app-component'>
        <header>
          <h1 className='title'>React JS</h1>
        </header>
        <main>
          <ListUsers />
          <div>
            <h2 className='title'>Всплытие данных</h2>
            <Calculator/>
          </div>
        </main>
        <h2 className='title'>Тест компонентов</h2>
        <Clock />
        <Toggle />
        <Input />
      </div>
    )
  };
}

export default App;
