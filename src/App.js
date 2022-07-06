import About from './About';
import './App.css';
import Home from './Home';
import Links from './Links';
import NavBar from './NavBar';
import Projects from './Projects';

function App() {

  window.onscroll = function() {scrollFunction(); expandFunction()};

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

  function expandFunction() {
    let elements = document.querySelectorAll("#projectCardDesc")

    if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
      for(var i = 0; i < elements.length; i++) {
        elements[i].style.transform = "translate(-1rem)"
      }
    } else {
      for(var i = 0; i < elements.length; i++) {
        elements[i].style.transform = "translate(-1000px)"
      }
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
