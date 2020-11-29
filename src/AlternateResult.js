import React from 'react';

const AlternateResult = () => {

    function refreshPage() {
        window.location.reload(false);
      }

    return(
        <div id="results-alt">
          <h1>Looks safe!</h1>
          <p>This posting is not likely to be fraudulent.</p>
          <button class="back" onClick={refreshPage}>Try another</button>
        </div>
    );
}

export default AlternateResult;