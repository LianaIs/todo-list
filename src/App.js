import React, { Component } from 'react';
import AddItem from './components/addItem';
import Header from './components/Header';
import Card from './components/Card';

const app_styling = {
  textAlign: 'center',
  display: 'flex',
  backgroundcolor: 'aliceblue',
  flexDirection: 'column',
  justifyContent: 'center',
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      items: []
    }
  }
  render() {
    console.log(this.state.items);
    return (
      <div className="App" style={app_styling}>
	<Header
		number={this.state.items.length}
	/>
	<Card
		items={this.state.items}
		deleteHandler={(e)=>{
			let {items} = this.state;
			delete items[e.target.id];
			items = items.filter((elem)=>{
				return (elem !== undefined);
			});
			this.setState({items});
		}}
	/>
        <AddItem
          addItemFunc={(data)=>{
            const {items} = this.state;
            // const items = this.state.items;
            items.push(data);
            this.setState({items});
          }}
        />
      </div>
    );
  }
}

export default App;
