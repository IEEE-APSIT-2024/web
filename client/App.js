import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Slider from './components/slider';
import Cards from './components/cards';
import About from './components/aboutus';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <About/>
      <Cards/>
    </div>
  );
}

export default App;
