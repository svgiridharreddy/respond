import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

const Table = ({data, columns}) => {
  return (  
    <React.Fragment>
      <table>
        <TableHeader columns={columns} />
        <TableBody data={data} columns={columns} />              
      </table>
      
    </React.Fragment>
  );
}
 
export default Table;

