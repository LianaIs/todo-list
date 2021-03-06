import React from 'react';

const but_styling ={
  backgroundColor: '#4682B4',
  color: 'white',
}
const input_styling ={
  fontSize : '24px',
  fontStyle: 'italic',
}

export default
class AddItem extends React.Component {
  constructor(){
    super();
    this.state = {
      text: ""
    }
  }
  changeHandler = (evn) => {
    this.setState({
      text: evn.target.value
    });
  }
  clickHandler = () => {
    const {text} = this.state;
    const name = text.split(',')[0];
    const price = text.split(',')[1];
    const data = {
      name,
      price
    }
    this.setState({
      text: ""
    });
    this.props.addItemFunc(data);
  }
  render(){
    return(
      <div>
        <input style={input_styling}
          placeholder="New item"
          type="text"
          value={this.state.text}
          onChange={this.changeHandler}
        />
        <input style = {but_styling}
          type="button"
          value="Add"
          onClick={this.clickHandler}
        />
      </div>
    )
  }
}
