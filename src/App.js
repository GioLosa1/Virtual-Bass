import "./App.css";
import Bassneck from "./components/Bass-neck";

function App() {
  return (
    <div className="App">
      <div className="img-div">
        <img className="img-head" src= {process.env.PUBLIC_URL + "/sterling.png"}
         />
      
      </div>
      

      <div className="bassneck-body">
        <Bassneck />
      </div>
    </div>
  );
}

export default App;
