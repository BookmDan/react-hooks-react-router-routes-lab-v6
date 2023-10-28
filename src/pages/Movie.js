import React from 'react';
import { useParams } from 'react-router-dom';

function Movie() {
  const { id } = useParams();

  // Fetch movie details using the 'id' parameter

  return (
    <div>
      {/* Display movie details here */}
    </div>
  );
}

export default Movie;
