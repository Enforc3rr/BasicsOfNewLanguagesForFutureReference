import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { Button } from "react-bootstrap";
const accepted = [];
const rejected = [];
export class App extends Component {
  accept = (cell, row, rowIndex, formatExtraData) => {
    return (
      <Button onClick={() => {this.onAccept(row);}}>
        Accept
      </Button>
    );
  };
  reject = (cell, row, rowIndex, formatExtraData) => {
    return (
      <Button onClick={() => {this.onReject(row);}}>
        Reject
      </Button>
    );
  };
  onAccept(row){
    accepted.push(row);
    console.log(accepted);
  }
  onReject(row){
    const rejectReason = prompt("Enter Reason For Rejection");
    row.reason = rejectReason;
    rejected.push(row);
    console.log(rejected);
  }
  render() {
    const columns = [{
      dataField: 'id',
      text: 'ID'
    }, {
      dataField: 'name',
      text: 'Name'
    }, {
      dataField: 'mobile',
      text: 'Mobile Number'
    },
    {
      dataField: 'accept',
      text: 'Accept',
      formatter: this.accept
    },
    {
      dataField: 'reject',
      text: 'Reject',
      formatter: this.reject
    }];
    return (
      <div className="App">
        <p className="Table-header">Data</p>
         
        <BootstrapTable keyField='id' data={ data } columns={ columns } />
      </div>
    )
  }
}

export default App;

const data = [
  {
    id : 1 ,
    name : 'React',
    mobile : 1234
  },
  {
    id : 2 ,
    name : 'Spring',
    mobile : 5678
  },
  {
    id : 3 ,
    name : 'Nodejs',
    mobile : 123454543645
  },
  {
    id : 4 ,
    name : 'Java',
    mobile : 12312124
  }
]
