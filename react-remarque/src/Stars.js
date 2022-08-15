import React, { useState } from 'react';
function Stars() {
  const [stars, addStars] = useState('');
  return (
    <div>
      <button onClick={() => addStars(stars + '\u2728')}>Add some star</button>
      <p>{stars}</p>
    </div>
  )
}

export default Stars