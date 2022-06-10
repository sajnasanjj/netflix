import React from 'react';
import './App.css';
import { originals,actions,horror,comedy } from './url';

import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import RowPost from './Components/RowPost/RowPost';



function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <RowPost url={originals} title = 'Netflix Originals'/>
     <RowPost url={actions} title = 'Action' isSmall/>
     <RowPost url={horror} title ='Horror' isSmall/>
     <RowPost url={comedy} title ='Comedy' isSmall/>
     <RowPost url={horror} title ='Horror' isSmall/>
     <RowPost url={originals} title ='Horror' isSmall/>
   
    </div>
  );
}

export default App;
