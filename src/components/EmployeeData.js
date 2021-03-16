import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "./SearchBar";


class EmployeeData extends Component {
    // setting the empty arrays for each employee row that will be rendered and the complete employee directory
    state = {
        employee: [],
        displayEmployeeDir: [],
        search: "",
    };
    // the one time function that will load when application loads the first time
    componentDidMount() {
        API.getEmployees().then((res) => {
            this.setState({
                employee: res.data.results,
                displayEmployeeDir: res.data.results
            });
        });
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value});
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
                        <th >Country</th>
                        <th >Age</th>
                    </tr>
                </thead>
     {this.state.displayEmployeeDir.map(employee => (
         <tbody>
         <tr key={employee.id.value}>
           <td><img src={employee.picture.large} /></td>
           <td>{employee.name.first + " " + employee.name.last}</td>
           <td>{employee.email}</td>
           <td>{employee.phone}</td>
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