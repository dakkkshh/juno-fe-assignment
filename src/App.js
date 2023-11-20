import './App.css';
import Main from './components/layout/Main';
import Monitoring from './views/Monitoring';

function App() {
  return (
    <Main
      children={
        <Monitoring />
      }
    />
  );
}

export default App;
