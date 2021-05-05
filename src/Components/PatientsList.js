import React from "react";
import PatientModal from "./PatientModal";
import * as bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";

class PatientsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [],
      selectedPatientIndex: -1,
    };
    this.updateNotes = this.updateNotes.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/patients")
      .then((res) => {
        return res.json();
      })
      .then((patients) => {
        this.setState({
          patients: patients,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateNotes(id, newNotes) {
    const copyList = [...this.state.patients];
    for (let i = 0; i < copyList.length; i++) {
      if (copyList[i].id === id) {
        const copyNotes = newNotes.map((note) => {
          return {
            text: note.text,
            time: note.time,
            userName: note.userName,
            isDraft: false,
          };
        });
        copyList[i].notes = copyNotes;
        break;
      }
    }
    this.setState({
      patients: copyList,
      selectedPatientIndex: -1,
    });
  }

  hideModal() {
    this.setState({ selectedPatientIndex: -1 });
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">DoB</th>
              <th scope="col">PhoneNumber</th>
              <th scope="col">Email</th>
              <th scope="col"># Notes</th>
            </tr>
          </thead>
          <tbody>
            {this.state.patients.map((patient, index) => {
              return (
                <tr
                  key={index}
                  onClick={() => {
                    this.setState({ selectedPatientIndex: index }, () => {
                      const modal = new bootstrap.Modal(
                        document.getElementById("patientModal"),
                        {
                          backdrop: "static",
                        }
                      );
                      modal.show();
                    });
                  }}
                >
                  <td>{patient.firstName}</td>
                  <td>{patient.lastName}</td>
                  <td>{patient.dob}</td>
                  <td>{patient.phoneNumber}</td>
                  <td>{patient.email}</td>
                  <td>{patient.notes.length}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {this.state.selectedPatientIndex >= 0 && (
          <PatientModal
            patient={this.state.patients[this.state.selectedPatientIndex]}
            updateNotes={this.updateNotes}
            hideModal={this.hideModal}
          />
        )}
      </div>
    );
  }
}

export default PatientsList;
