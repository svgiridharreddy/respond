import React from 'react';

const TableHeader = ({columns}) => {
  return ( 
    <React.Fragment>
       <thead>
        <tr>
          {columns.map(column => 
            <th key={column.path || column.key} >
              {column.label} 
            </th>
            )}
        </tr>
      </thead>
    </React.Fragment>
   );
}
 
export default TableHeader;