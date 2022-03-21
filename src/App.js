import "./App.css";
import FunctionUp from "./components/FunctionUp/FunctionUp";
import Greet from "./components/Greet/Greet";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const arr = [1, 2, 3];
  const elem = <h1>Hello</h1>;
  const getNumber = (num) => {
    console.log(num + 2);
  };

  return (
    <div className="App">
      <FunctionUp getNumber={getNumber} />
      {/* <Greet name="John" age={10} />
      <hr />
      <Greet
        key={arr}
        name="Zhanara"
        age={21}
        image="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
      /> */}
    </div>
  );
}

export default App;
