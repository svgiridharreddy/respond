import React from 'react';
import _ from 'lodash';

const TableBody = ({data, columns}) => {
  const renderCell = (item,column) => {
    if(column.content) return column.content(item); 
    return _.get(item, column.path || column.key);
  }
  
  const createKey = (item,column) => {
    return item._id + (column.path || column.key)
  }
  return ( 
    <React.Fragment>
      <tbody>
        {data.map(
          item =>
          <tr key={item.id}>
            {columns.map(column => 
            <td key={createKey(item,column)}>
              {renderCell(item,column)}
          </td>)}
          </tr>
        )}
      </tbody>
    </React.Fragment>
   );
}
 
export default TableBody;