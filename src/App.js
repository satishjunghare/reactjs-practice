import Welcome from './components/Welcome';
import Counter from './components/Counter';
import './App.css';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      <Welcome fname="Satish" lname="Junghare" />
      <Counter />
      <ClassClick />

      <hr/>
      <h1>Event Bind</h1>
      <EventBind />
    </div>
  );
}

export default App;
