import React from 'react';
import moment from 'moment';
import {Bar} from 'react-chartjs-2';
import Table from 'react-bootstrap/Table';

const SmallCard = ({record}) =>
<>
 {/* {JSON.stringify(record)} */}
 <div className="card mb-3">
     <div className="row no-gutters">
        <div className="col-md-4">
            {/* <img 
            src="https://via.placeholder.com/900x500.png?text=MERN+Booking"
            alt="default record image"
           className="card-image img img-fluid"
           /> */}
           <Bar
           data={{
               labels:['Mood'],
               datasets:[{
                   label:'Patient Mood',
                   data:[[record.mood],10, 20],
                   backgroundColor: 'red',
                   barThickness:20
               }]
           }}
           options={{
               scales :{
                yAxes:[
                    {
                        ticks:{
                            beginAtZero:true
                        }
                    }
                ]
               }
           }}
           
           />
        </div>
        <div className="col-md-8">
            <div className="card-body">
                {/* <h3 className="card-title">{record.title}
                <span className="float-right">$ {record.price}</span>
                </h3>
                <p className="alert alert-info">{record.observation}</p>
                <p className="card-text">{`${record.description.substring(0, 200)}...`}</p> */}
                <Table striped bordered hover size="sm">
            <thead>
                <tr>
                
                <th>Title</th>
                <th>Price</th>                
                <th>Observation</th>
                <th>Mood Rank : scale of 1-5</th>
                <th>Description</th>
                <th>Admin</th>
                <th>Patient</th>
                <th>Visited</th>
                
                </tr>
            </thead>
            <tbody>
                <tr>
               
                <td>{record.title}</td>
                <td>$ {record.price}</td>                
                <td>{record.observation}</td>
                <td>{record.mood}</td>
                <td>{`${record.description.substring(0, 200)}...`}</td>
                <td>{record.postedBy.name}</td>
                <td>{record.user.name}</td>
                <td>{` ${moment(record.createdAt).fromNow()}`}</td>
               
                </tr>
                
            </tbody>
            </Table>
            </div>
        </div>
     </div>

 </div>
 {/* <div className="container-fluid">
            <div className="row">
                <div className="col-md-10 offset-md-1">
                <Table striped bordered hover size="sm">
            <thead>
                <tr>
                
                <th>Title</th>
                <th>Price</th>
                <th>Observation</th>
                <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
               
                <td>{record.title}</td>
                <td>$ {record.price}</td>
                <td>{record.observation}</td>
                <td>{`${record.description.substring(0, 200)}...`}</td>
                </tr>
                
            </tbody>
            </Table>
                </div>
            </div>
        </div> */}
</>

export default SmallCard ;