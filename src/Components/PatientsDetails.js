import React from "react";

class PatientsDetails extends React.Component {
  render() {
    return (
      <div>
        <h1>Patient Details</h1>
        <table className="table table-striped">
          <tbody>
            <tr>
              <th>First Name</th>
              <td>{this.props.patient.firstName}</td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>{this.props.patient.lastName}</td>
            </tr>
            <tr>
              <th>Date of Birth</th>
              <td>{this.props.patient.dob}</td>
            </tr>
            <tr>
              <th>Phone Number</th>
              <td>{this.props.patient.phoneNumber}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{this.props.patient.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default PatientsDetails;
