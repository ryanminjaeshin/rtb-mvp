import React from 'react';

import ProductInfo from '../ProductInfo/ProductInfo';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <ProductInfo />
      </div>
    );
  }
}
