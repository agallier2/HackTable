import React from 'react';


const Result = () => {

    function refreshPage() {
        window.location.reload(false);
      }

    return(
        <div id="results">
          <h1>Watch out!</h1>
          <p>This posting is likely to be fraudulent.</p>
          <button class="back" onClick={refreshPage}>Try another</button>
        </div>
    );
}

export default Result;