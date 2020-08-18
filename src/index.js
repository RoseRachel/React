import { render } from 'react-dom';
import React, { Component, Fragment } from 'react';
import TopBar from './TopBar';
import ProductList from './ProductList';
import Hello  from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }


  render() {
    return (
      <Fragment>
       <TopBar/>
        <div className="container">
          <ProductList />
        </div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));
 
       




  


   
