import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

import TextField from './components/controls/TextField';
import DropDown from './components/controls/DropDown';
import LoremIpsum from './components/LoremIpsum';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfParas: 2,
      html: true,
      text: ''
    };
  }

  componentWillMount() {
    this.getLoremIpsum();
  }

  getLoremIpsum() {
    axios.get('http://hipsterjesus.com/api?paras=' + this.state.numOfParas + '&html=' + this.state.html)
      .then((response) => {
        this.setState({text: response.data.text}, () => {
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  changeParas(number) {
    this.setState({numOfParas: number}, this.getLoremIpsum);
  }

  includeHtml(isHtml) {
    this.setState({html: isHtml}, this.getLoremIpsum);
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Lorem Ipsum Generator</h1>
        <h6 className="text-right">
          <em>
            ^~^Using <a href="https://facebook.github.io/react" className="link1">React</a>
          <a href="https://github.com/mzabriskie/axios" className="link2">Axios</a>
            <a href="http://hipsterjesus.com/" className="link3">Hipster Jesus</a>^~^
          </em>
        </h6>
        <hr />
        <div className="row">
          <form className="form-line">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="">Paragraphs</label>
                <TextField value={this.state.numOfParas} onChange={this.changeParas.bind(this)} />
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="">Include HTML?</label>
              <DropDown value={this.state.html} onChange={this.includeHtml.bind(this)} />
            </div>
          </form>
        </div>
        <div className="row">
          <div className="col-md-12">
            <LoremIpsum value={this.state.text} />
          </div>
        </div>
        <footer className="fixed">
          &copy; Ajay Bhatia, 2017
        </footer>
      </div>
    );
  }
}

export default App;
