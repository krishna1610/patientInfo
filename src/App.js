import "./App.css";
import AppHeader from "./Components/AppHeader";
import Notes from "./Components/Notes";
import PatientsList from "./Components/PatientsList";

function App() {
  return (
    <div>
      <AppHeader />
      <PatientsList />
    </div>
  );
}

export default App;
