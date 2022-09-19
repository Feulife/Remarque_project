import React, { useEffect } from "react";

const MyRemarques = () => {
  useEffect(() => {
    document.title = 'My Remarques - Remarque';
  })

  return (
    <div>
      <h1>Remarque</h1>
      <p>These are my remarques</p>
    </div>
  )
}

export default MyRemarques;