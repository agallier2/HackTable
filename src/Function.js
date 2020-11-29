import React, {useEffect, useState} from 'react';
import Result from './Result';
import AlternateResult from './AlternateResult';
import './App.css';

const Function = () => {

const showResults = e => {
    e.preventDefault();
    setResult(<Result/>);
  }
  
  const [result, setResult] = useState([]);
  
    return(
      <div className="App">
  
        <datalist id="locations">
          <option value="San Francisco, CA"></option>
          <option value="Chicago, IL"></option>
          <option value="New York, NY"></option>
          <option value="Seattle, WA"></option>
          <option value="Boston, MA"></option>
        </datalist>
        <datalist id="industries">
          <option value="Information Technology"></option>
          <option value="Cybersecurity"></option>
          <option value="Data Science"></option>
          <option value="Software Engineering"></option>
          <option value="Web Development"></option>
        </datalist>
        <datalist id="employment-types">
          <option value="Internship"></option>
          <option value="Full-time"></option>
          <option value="Part-time"></option>
          <option value="Contract"></option>
          <option value="Other"></option>
        </datalist>

        <div>
        <h2>Copy the information from the job posting:</h2>
        </div>

        <form onSubmit={showResults} className="job-attributes">
        <input className="form-input" type="text" id="title" placeholder="Job Title"/>
          <input className="form-input" type="text" id="location" list="locations" placeholder="Location"/>
          <input className="form-input" type="text" id="description" placeholder="Description"/>
          <input className="form-input" type="text" id="requirements" placeholder="Qualifications"/>
          <input className="form-input" type="text" id="industry" list="industries" placeholder="Industry"/>
          <input className="form-input" type="text" id="employment-type" list="employment-types" placeholder="Employment Type"/>
          <div className="form-input" id="container">
          <button className="search-button" type="submit">ANALYZE</button>
          </div>
        </form>
        {result}
      </div>)

    }

export default Function;

