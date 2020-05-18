import React from 'react';
import "./components/MY_STOCKS/Mystock";
import "./App.css";
import "./Styles/reset.css";
import './App.css';
import Mystock from './components/MY_STOCKS/Mystock';
import AddStock from "./components/ADD_STOCKS/AddStock";
import Conatiner from './components/Container';


function App(_props) {
  return (
    <div className="App">
     <header className="header">Finance Portfolio Tracker</header>
<br></br><br></br>
 <div className="Mystock">
    <Mystock/>
    </div>     
    
    
    
<hr></hr>
       
      
      <div className="addstock">
           {/* <AddStock/> */}
           <Conatiner/>
      </div>
    
    </div>
  );
}

export default App;
