import About from './About';
import './App.css';
import Home from './Home';
import Links from './Links';
import NavBar from './NavBar';
import Projects from './Projects';

function App() {

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      document.getElementById("nav").style.top = "0px"
    } else {
      document.getElementById("nav").style.top = "-10rem"
    }

    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      document.getElementById("link").style.bottom = "-70px"
    } else {
      document.getElementById("link").style.bottom = "-100rem"
    }
  }

  return (
    <div className="App">
      <style>@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');</style>
      <div className='homeSection'>
        <Home/>
      </div>
      <div id="body" className='appBody'>
        <div id="nav" className='topNav'>
          <NavBar/>
        </div>
          <About/>
          <Projects/>
        <div className='appLinksContainer'>
          <Links/>
        </div>
      </div>
    </div>
  );
}

export default App;
