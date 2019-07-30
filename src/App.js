import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar';
import Members from './components/Members';


export const MyContext = React.createContext();
export class MyProvider extends React.Component {
  state = {
    members: ['Hulk', 'Thor', 'Loki', 'Ultron']
  }

  render() {
    return (
      <MyContext.Provider value={{...this.state}}>
        { this.props.children }
      </MyContext.Provider>
    )
  }
} 

export class App extends React.Component {
  render(){
    return (
      <MyProvider>
        <React.Fragment>
          {/* <Toolbar /> */}
          <Members />
        </React.Fragment>
      </MyProvider>
    )
  } 
}
