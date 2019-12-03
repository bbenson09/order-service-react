import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Hospitals } from "./components/Hospitals";
import { Product } from "./components/Product"
import { Column, Row } from 'simple-flexbox'

var _ = require('underscore');

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hospitals: null,
      products: null,
      hospitalSelectedId: null,
      productsSelected: null,
    };
  }

  hospitalSelectCallback = (hospital) => {
    console.log(hospital)
    this.setState({
      hospitalSelected: hospital
    });
  };

  render() {
    return (
        <div className="App">
          <Column flexGrow={1}>
            <Row horizontal='center'>
              <Hospitals hospitals={this.state.hospitals} onSelect={this.hospitalSelectCallback}/>
            </Row>
            <Column horizontal='center'>
              {(this.state == null || this.state.products == null) ? null : 
                this.state.products.map((product, idx) => (
                <Product currentProduct={product}/>
              ))}
            </Column>
          </Column>
        </div>
    );
  }

  componentDidMount() {
    console.log('woot');
    fetch('/hospitals').then(response =>
        response.json().then(data => {
          this.setState({
            hospitals: data
          })
          console.log(data)
        })
    );
    fetch('/inventory').then(response =>
        response.json().then(data => {
          console.log(data)
          this.setState({
            products: data
          })
        })
    );
  }
}

export default App;
