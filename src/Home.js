import React from 'react';
import './App.css';

const Home = () => {

    const startUsing = () => {
        window.location.href='/Use';
    }

    return(
        <div id="homepage">
          <h2 id="home">Welcome to Pyrite!</h2>
          <p>Scammers often take advantage of job hunters, using false advertisements to harvest personal information.
              We use machine learning technology to detect fraudulent postings for you.</p>
          <button class="search-button" onClick={startUsing}>GET STARTED</button>
        </div>
    );
}

export default Home;