import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from '../common/table';
class ProductTable extends Component {
  state = {  } 
  columns = [
    {path: 'policyNumber', label: 'Policy Number', content: product => <Link to={`/product/${product.id}`}>{product.policyNumber}</Link>}
  ];
  products  = [{id: 1,policyNumber: "ASD1234DK9"},{id: 3,policyNumber: "WSQWW234DK9" },{id: 3,policyNumber: "PSAD1234QA"}]
  render() { 
    return (
      <React.Fragment>
        <Table 
        data={this.products}
        columns={this.columns} 
      />
      </React.Fragment>
    );
  }
 
  
}
 
export default ProductTable;