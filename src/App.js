import Dog from "./Dog";
import Running from "./Running";
import "./App.css";

const App = () => {
  return (
    <div className="parent">
      <div className="App"></div>
      <div className="road">
        <span className="roadLine"></span>
      </div>

      <Running />

      <Dog />
    </div>
  );
};

export default App;
