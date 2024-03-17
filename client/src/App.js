import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Slider from './components/slider';
import Cards from './components/cards';
import About from './components/aboutus';
import Contact from './components/contactus'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <About/>
      <Cards/>
      <Contact/>
    </div>
  );
}

export default App;
