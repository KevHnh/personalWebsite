import About from './About';
import './App.css';
import Contact from './Contact';
import Education from './Education';
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
      document.getElementById("nav").style.top = "-100rem"
    }

    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      document.getElementById("link").style.bottom = "-70px"
    } else {
      document.getElementById("link").style.bottom = "-100rem"
    }
  }

  function expandFunction() {
    let elements1 = document.querySelectorAll("#projectCardDesc")
    let elements2 = document.querySelectorAll("#projectCardDescR")

    if (document.body.scrollTop > 2100 || document.documentElement.scrollTop > 2100) {
      for(let i = 0; i < elements1.length; i++) {
        elements1[i].style.transform = "translate(-1rem)"
      }
    } else {
      for(let i = 0; i < elements1.length; i++) {
        elements1[i].style.transform = "translate(-1000px)"
      }
    }

    if (document.body.scrollTop > 2100 || document.documentElement.scrollTop > 2100) {
      for(let i = 0; i < elements2.length; i++) {
        elements2[i].style.transform = "translate(1rem)"
      }
    } else {
      for(let i = 0; i < elements2.length; i++) {
        elements2[i].style.transform = "translate(1000px)"
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
        <div className="componentsContainer">
          <About/>
          <Education/>
          <Projects/>
          <Contact/>
        </div>
        <div className='appLinksContainer'>
          <Links/>
        </div>
      </div>
    </div>
  );
}

export default App;
