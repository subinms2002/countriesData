import logo from './logo.svg';
import './App.css';

import RootLayout from './Pages/RootLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Componets/Home/Home';
import Todopage from './Pages/TodoPages/Todopage';
import CountriesBox from './Pages/TodoPages/Countries/CountriesBox';




function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout/>}>
         <Route index element={<Home/>} />
         <Route path='todo' element={<Todopage/>}/>
         <Route path='countries' element={<CountriesBox/>}/>
        
    
         
        </Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
