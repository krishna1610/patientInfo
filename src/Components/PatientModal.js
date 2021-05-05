import React from "react";
import Notes from "./Notes";
import PatientsDetails from "./PatientsDetails";

class PatientModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: ["Details", "Notes"],
      selectedTabIndex: 0,
    };
  }

  render() {
    return (
      <div
        className="modal fade"
        id="patientModal"
        tabIndex="-1"
        aria-labelledby="patientModalLabel"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="patientModalLabel">
                Edit Patient
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  this.props.hideModal();
                }}
              ></button>
            </div>
            <div className="modal-body">
              <ul className="nav nav-tabs">
                {this.state.tabs.map((tab, index) => {
                  return (
                    <li className="nav-item" key={index}>
                      <a
                        className={
                          "nav-link " +
                          (this.state.selectedTabIndex === index
                            ? "active"
                            : "")
                        }
                        aria-current="page"
                        href="#"
                        onClick={() => {
                          this.setState({ selectedTabIndex: index });
                        }}
                      >
                        {tab}
                      </a>
                    </li>
                  );
                })}
              </ul>
              {this.state.selectedTabIndex === 0 ? (
                <PatientsDetails patient={this.props.patient} />
              ) : (
                <Notes
                  patient={this.props.patient}
                  updateNotes={this.props.updateNotes}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PatientModal;
