import About from './About';
import './App.css';
import Home from './Home';
import Links from './Links';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <style>@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');</style>
      <div className='homeSection'>
        <Home/>
      </div>
      <div id="body" className='appBody'>
        <div className='topNav'>
          <NavBar/>
        </div>
          <About/>
        <div className='linksContainer'>
          <Links/>
        </div>
      </div>
    </div>
  );
}

export default App;
