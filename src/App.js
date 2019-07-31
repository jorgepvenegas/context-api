import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar';
import Members from './components/Members';


export const MyContext = React.createContext();
export class MyProvider extends React.Component {
  state = {
    newMember: '',
    members: ['Hulk', 'Thor', 'Loki', 'Ultron'],
    updateNewMember: newMember => {
      this.setState({
        newMember
      })
    },
    saveMember: () => {
      let { newMember, members } = this.state;
      members.push(newMember);
      this.setState({
        members,
        newMember: ''
      })
    }
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
          <Toolbar />
          <Members />
        </React.Fragment>
      </MyProvider>
    )
  } 
}
