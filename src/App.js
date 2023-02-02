import React, {useEffect, useState} from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';

function App() {
  const [resumeData, setResumeData] = useState({});

  const getResumeData = () => {
    $.ajax({
      url: '/resumeData.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        setResumeData(data);
      },
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize('UA-180696778-1');
    }
    getResumeData();
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.pageview(window.location.pathname + window.location.hash + window.location.search);
    }
  }, [window.location.pathname + window.location.hash + window.location.search]);


  return (
    <div className="App">
      <Header data={resumeData.main}/>
      <About data={resumeData.main}/>
      <Resume data={resumeData.resume}/>
      {/* <Portfolio data={this.state.resumeData.portfolio} /> */}
      <Testimonials data={resumeData.testimonials}/>
      <Contact data={resumeData.main}/>
      <Footer data={resumeData.main}/>
    </div>
  );
}

export default App;
