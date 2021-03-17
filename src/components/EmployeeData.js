import React, { Component } from "react";
import API from "../utils/API";
import SearchBar from "./SearchBar";


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
    // this function will search through employees using filter, built in array method
    handleInputChange = event => {
        const employeeSearch = event.target.value.toLowerCase();

        const filteredEmployee = this.state.employee.filter((employee) => {
            const employeeResult = employee.name.first + employee.name.last;
            return employeeResult.toLowerCase().includes(employeeSearch);
          });
          this.setState({
            displayEmployeeDir: filteredEmployee,
            search: employeeSearch,
          });
            
    };

   
    render() {
        return (
         <div>
             <SearchBar 
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                />
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