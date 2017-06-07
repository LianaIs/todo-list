import React, { Component } from 'react';
import AddItem from './components/addItem';
import Header from './components/Header';

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
      <div className="App">
	<Header
		number={this.state.items.length}
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
