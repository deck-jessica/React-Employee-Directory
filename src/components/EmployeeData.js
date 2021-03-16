import React, { Component } from "react";
import API from "../utils/API";


class EmployeeData extends Component {
    state = {
        employee: [],
        displayEmployeeDir: [],
    };
    // the one time function that will load when application loads the first time
    componentDidMount() {
        API.getEmployees().then((res) => {
            this.setState({
                employee: res.data.results,
                displayEmployeeDir: res.data.results
            });
        }
        );
    };

    render() {
        return (
         <div>
            <table className="table">
                <thead>
                    <tr>
                        <th >Photo</th>
                        <th >Name</th>
                        <th >Email</th>
                        <th >Phone</th>
                        <th >Location</th>
                        <th >Country</th>
                        <th >Age</th>
                    </tr>
                </thead>
     {this.state.displayEmployeeDir.map((employee) => (
         <tbody>
         <tr key={employee.id.value}>
           <td>Mark</td>
           <td>{employee.name.first + " " + employee.name.last}</td>
           <td>{employee.email}</td>
           <td>{employee.phone}</td>
           <td>{employee.location.city}</td>
           <td>{employee.location.country}</td>
           <td>{employee.dob.age}</td>
         </tr>
         </tbody>
     ))}          
 
</table>
</div>
        );
    }
}

export default EmployeeData;