import React from "react";

function SearchBar(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          list="displayEmployeeDir"
          type="text"
          className="form-control"
          placeholder="Search for an employee"
          id="search"
        />
        {/* <datalist id="displayEmployeeDir">
            {props.displayEmployeeDir.map(employee => (
                <option value={employee} key={employee} />
            ))}
        </datalist> */}
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;