import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import Status from './Pages/Status';
import Draft from './Pages/Draft';

function App() {
  return (
   <>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/status' element={<Status/>}></Route>
    <Route path='/draft' element={<Draft/>}></Route>
   
   </Routes>
   </>
     
  );
}

export default App;
