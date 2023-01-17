import './App.css';

import {BrowserRouter as Router, Switch,Routes,Route}from 'react-router-dom';

import MindMap from './Components/data';

import Header from './Components/Header';

import Footer from './Components/Footer';

import Home from './Components/Home';
import RjsDoc from './Components/RJS_Doc';

import InPack from './Components/InPack';

import SeriesList from './SeriesList';



function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
      <Route path="/" exact element= {<Home />}></Route>
      <Route path="/MindMap" exact element= {<MindMap />}></Route>
      <Route path="/RjsDoc" exact element= {<RjsDoc />}></Route>
      <Route path="/InPack" exact element= {<InPack />}></Route>
      <Route path="/SeriesList" exact element= {<SeriesList />}></Route>
      </Routes>
      <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
