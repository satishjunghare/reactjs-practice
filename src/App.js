import Welcome from './components/Welcome';
import Counter from './components/Counter';
import './App.css';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import ListComponent from './components/ListComponent';

function App() {
  return (
    <div className="App">
      <Welcome fname="Satish" lname="Junghare" />
      <Counter />
      <ClassClick />

      <hr/>
      <h3>Event Bind</h3>
      <EventBind />

      <hr/>
      <h3>Methods as props</h3>
      <ParentComponent />

      <hr/>
      <h3>Conditional Rendering</h3>
      <UserGreeting />

      <hr/>
      <h3>Places List</h3>
      <ListComponent />
    </div>
  );
}

export default App;
