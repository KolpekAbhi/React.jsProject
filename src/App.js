
import './App.css';
import AddEmpData from './components/AddEmpData';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import ClientLogin from './components/ClientLogin';
import Home from './components/Home';
import Editemp from './components/Editemp';




function App() {
  return (
  <div>
      
  <Navbar></Navbar>   
  <Routes>
  <Route path= '/' element={<ClientLogin/>}></Route>
  <Route path= '/home' element={<Home/>}></Route>
  <Route path= '/AddEmpdata' element={<AddEmpData/>}></Route>
  <Route path= '/editemp/:id' element={<Editemp/>}></Route>
  </Routes>
    </div>
  );
};

export default App;
