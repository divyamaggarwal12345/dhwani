import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2'
import axios from 'axios';
import { Button } from '@material-ui/core';
import {Link} from "react-router-dom";
import './pie.css';

function PieChart() {
    const [mydata, setData] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then(resp => resp.json())
          .then(resp => {
            setData(resp)
            
          })
      }, [])
       
      const data = {
        labels:['Employee1','Employee2','Employee3','Employee4', 'Employee5'],
        datasets:[
            {
                label: 'Sales for 2021 in Millions',
                data:[10,20,30,40,50],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 205, 88, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 60, 1)',
                    'rgba(153, 102, 255, 1)',
                ]
               
            }
        ]

    }

    const options ={
        title: {
            display: true,
            text:'Pie'
        }
        
    }


return(
    <div>
        <Link to="/">
            <Button color={'secondary'}>
            <p>Go To Page 1</p>
            </Button>
        </Link>
        <h1>SALES OF EMPLOYEES in MILLIONS </h1>
        <p>Hower over the pie chart to see the number of sales of employees</p>
        <div className ='piesize'>
        <Pie data={data} options={options}/>
        </div>
    </div>
)


}


export default PieChart