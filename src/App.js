import './App.css';
import First from './components/First';
import Navbar from './components/Navbar';
import StateBasics from './components/StateBasics';
import Read from './components/Read';
import Table1 from './components/Table1';
import { Route, Routes } from 'react-router-dom';
import ApiGet from './components/ApiGet';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/' element = {<StateBasics/>} />
      <Route path='/f' element = {<First/>} />
      <Route path='/t' element = {<Table1/>} />
      <Route path='/n' element = {<Navbar/>} />
      <Route path='/api' element = {<ApiGet/>} />
    </Routes>

    </div>
  );
}

export default App;
