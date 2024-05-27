import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import RegForm from './components/RegForm';
import Contacts from './components/Contacts';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/regform" element={<RegForm/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
