import logo from './logo.svg';
import './App.css'; //css link와 같은 효과
import Hello from './components/Hello';
import Start from './components/Start';
import HelloProps from './components/HelloProps';
import HelloProps2 from './components/HelloProps2';
import StartProps from './components/StartProps';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1>React~!!</h1>
      <div>Hello react World~!!</div>

      <hr />
      <Hello />
      <Hello />

      <hr />

      <Start />

      <hr />

      <HelloProps name="홍길동" age="30" />
      <HelloProps name="짱구" age="5" />
      {/* Props={
      name : 홍길동,
      age : 30
      } */}

      <hr />
      <HelloProps2 name="순이" age="20" />

      <hr />
      <StartProps name="홍길동" phone="010-1234-5678" />

      <hr />
      <Counter />

    </div>
  );
}

export default App;
