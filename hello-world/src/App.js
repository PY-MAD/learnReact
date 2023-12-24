import './App.css';
import Greet  from "./components/Greet"
import Msg  from "./components/Msg"

function App() {
  return (
    <div className="App">
      <Greet name="abu 7awas">
        <p>hello im the child for my dad !!!</p>
      </Greet>
      < Greet name="saleh" />
      < Greet name="abdullah" />
      <Msg/>
    </div>
  );
}

export default App;
