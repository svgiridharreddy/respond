import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Table from '../common/table';


class CustomerTable extends Component {
  
  columns = [
    {path: 'name', label: 'Name', content: customer => <Link to={`/customer/${customer.id}`}>{customer.name}</Link>},
    {path: 'contactType', label: 'Contact Type'},
  ];
  customers  = [{id: 1,name: "Giridhar",contactType: "Trust" },{id: 2,name: "Reddy",contactType: "Trustee" }]
  render() { 
    return (
      <React.Fragment>
        <Table 
        data={this.customers}
        columns={this.columns} 
      />
      </React.Fragment>
    );
  }
}
 
export default CustomerTable;