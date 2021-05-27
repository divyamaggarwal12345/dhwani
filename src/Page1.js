import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { Button } from '@material-ui/core';
import {Link} from "react-router-dom";

function TableData() {

  const [data, setData] = useState([])
  const columns = [
    { title: "ID", field: "id" },
    { title: "Username", field: "username" },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Phone", field: "phone" },
    { title: "Web Link", field: 'website' }
  ]
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(resp => {
        setData(resp)
      })
  }, [])

  return (
    <div className="App">
     {/* <button onClick={() => history.push('/page2')}>Go To Page 2</button> */}
 <Link to="/page2">
     <Button color={'primary'}>
        <p>Go To Page 2</p>
     </Button>
 </Link>
      <h4 align='center'>Data Table</h4>
      <MaterialTable
        title="Employee Data"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default TableData