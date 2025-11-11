import logo from './assets/s-logo.png';
import Header from './components/Header';
import ListUsers from './components/ListUsers';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
    
        <img src={logo} className="App-logo" alt="logo" />
       
      
      <ListUsers/>
        
     
    </div>
  );
}

export default App;
