import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import './App.css';
let pagesRead = 0


  
  class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      pagesRead: 0, 
      error: ""
    
    };
    

    // This binding is necessary to make `this` work in the callback
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  add(e) {
    e.preventDefault()
    if (this.state.pagesRead >= 9999999) {
  
    this.setState({ error: "You Have read too many pages for me to handle great work!!!" })

    } else {
    this.setState({ pagesRead: this.state.pagesRead + 1 })
    }
  }

  subtract(e) {
    e.preventDefault()
    this.setState({ pagesRead: this.state.pagesRead - 1 })
  }

  // addSpecificAmount(e) {
  //   this.setState({pagesRead: this.state.pagesRead +  e})
  // }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.pagesRead + this.element.value > 9999999) {
      this.setState({ error: "You Have read too many pages for me to handle great work!!!" })
    }else {
      this.setState({ pagesRead: this.state.pagesRead + parseInt(this.element.value) });
    }
    
  }
  render() {
    return (
      <div>
            <button className="arrowleft" onClick={this.add}></button> 
       
            <h4 className="pagesBox">{this.state.pagesRead}</h4>

            <button className="arrowright" onClick={this.subtract}></button>
           
            <form className="form" onSubmit={this.handleSubmit}>
              <label>
                <h5>Add a specific # of pages</h5>
              <input type="text" ref={el => this.element = el} />
              </label>
              <input className="submit" type="submit" value="Submit" />
            </form>
            <h4>{this.state.error}</h4>
            
      </div>
    );
  }
  // onChange={event => this.addSpecificAmount(event.target.value)}
  }

  export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },


// });
