import React from "react";
import moment from "moment";

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteText: "",
      notesList: [...props.patient.notes],
    };
    this.handleChange = this.handleChange.bind(this);
    this.addNote = this.addNote.bind(this);
    this.resetText = this.resetText.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  handleChange(event) {
    this.setState({ noteText: event.target.value });
  }

  addNote() {
    if (this.state.noteText.length > 0) {
      const note = {
        text: this.state.noteText,
        time: moment().format("MMMM Do YYYY, h:mm:ss a"),
        userName: "Test User",
        isDraft: true,
      };
      // Copy existing list of notes
      const copyList = [...this.state.notesList];
      // Add new note to existing list
      copyList.unshift(note);
      // Update list with new list
      this.setState({
        notesList: copyList,
        noteText: "",
      });
    }
  }

  deleteNote(index) {
    // Copy existing list of notes
    let copyList = [...this.state.notesList];
    // Delete note at index passed
    copyList.splice(index, 1);
    // Update list
    this.setState({
      notesList: copyList,
    });
  }

  resetText() {
    this.setState({ noteText: "" });
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row py-2">
            <div className="col">
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Add a note"
                  className="form-control"
                  value={this.state.noteText}
                  onChange={this.handleChange}
                ></input>
              </div>

              <div>
                <button className="btn btn-primary" onClick={this.addNote}>
                  Add Note
                </button>
                <button className="btn btn-light" onClick={this.resetText}>
                  Clear
                </button>
              </div>
            </div>
          </div>
          {this.state.notesList.map((note, index) => {
            return (
              <div className="row py-2" key={index}>
                <div className="col-8">
                  <b>{note.userName}</b>
                </div>
                <div className="col-4">
                  {note.isDraft && (
                    <button
                      type="button"
                      className="btn btn-link p-0"
                      onClick={() => {
                        this.deleteNote(index);
                      }}
                    >
                      Delete Draft
                    </button>
                  )}
                </div>
                <div className="col-12">{note.time}</div>
                <div className="col-12">{note.text}</div>
              </div>
            );
          })}
        </div>

        <div className="d-flex justify-content-end">
          <button
            type="button"
            data-bs-dismiss="modal"
            className="btn btn-primary align-right"
            onClick={() => {
              this.props.updateNotes(
                this.props.patient.id,
                this.state.notesList
              );
            }}
          >
            Save &amp; Close
          </button>
        </div>
      </>
    );
  }
}

export default Notes;
