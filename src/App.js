import './App.css';
import AccStatus from './components/AccStatus';
import Auth from './components/Auth';
import Balance from './components/Balance';
import Banking from './components/Banking';

function App() {
  return (
    <div className='App'>
      <Auth />
      <Balance />
      <Banking />
      <AccStatus />
    </div>
  );
}

export default App;
