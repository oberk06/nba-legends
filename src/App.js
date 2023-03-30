import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import CardContainer from "./component/CardContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>NBA LEGENDS</h1>
      <CardContainer/>
    </div>
  );
}

export default App;
